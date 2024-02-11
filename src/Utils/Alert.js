import Swal from 'sweetalert2';

const showAlert = (type, message) => {
      Swal.fire({
            icon: type,
            title: message,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            
        });
};

export const successAlert = (message) => {
      showAlert('success', message);
};

export const errorAlert = (message) => {
      showAlert('error', message);
};

export const warningAlert = (message) => {
      showAlert('warning', message);
};

export const infoAlert = (message) => {
      showAlert('info', message);
};

export const questionAlert = (message) => {
      showAlert('question', message);
};

export default showAlert;
