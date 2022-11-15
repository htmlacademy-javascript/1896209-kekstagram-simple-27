import './random-photo-user.js';
import './image-size.js';
import './image-effects.js';
import {getData} from './api.js';
import {setUserFormSubmit, closeUserModal} from './upload-user-img.js';

getData();
setUserFormSubmit(closeUserModal);
