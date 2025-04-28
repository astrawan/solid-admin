import { type JSX, Show, createEffect, onMount } from 'solid-js';

interface DialogProps
  extends Omit<
    JSX.DialogHtmlAttributes<HTMLDialogElement>,
    'class' | 'onCancel'
  > {
  opened?: boolean;
  closeOnClickOutside?: boolean;
  closeOnEscape?: boolean;
  // NOTE: not implemented yet
  withOverlay?: boolean;
}

function Dialog(props: DialogProps) {
  let dialogRef: HTMLDialogElement | undefined;
  const closeOnClickOutside =
    props.closeOnClickOutside === undefined || props.closeOnClickOutside;
  const closeOnEscape =
    props.closeOnEscape === undefined || props.closeOnEscape;
  const withOverlay = props.withOverlay === undefined || props.withOverlay;

  onMount(() => {
    if (dialogRef) {
      if (typeof props.ref === 'function') {
        props.ref(dialogRef);
      } else {
        props.ref = dialogRef;
      }
    }
  });

  createEffect(() => {
    if (props.opened === undefined) {
      return;
    }

    if (props.opened) {
      dialogRef?.showModal();
    } else {
      dialogRef?.close();
    }
  });

  return (
    <dialog
      {...props}
      ref={dialogRef}
      class="modal p-4"
      onCancel={(evt) => {
        if (!closeOnEscape) {
          evt.preventDefault();
        }
      }}
    >
      {props.children}
      <Show when={withOverlay}>
        <form
          method="dialog"
          class="modal-backdrop backdrop-blur-xs absolute w-screen h-screen"
        >
          <button
            type="button"
            onClick={() => {
              if (closeOnClickOutside) {
                dialogRef?.close();
              }
            }}
          >
            close
          </button>
        </form>
      </Show>
    </dialog>
  );
}

export default Dialog;
