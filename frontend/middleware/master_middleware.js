import ImageMiddleware from './image_middleware';
import UserMiddleware from './user_middleware';
import { applyMiddleware } from 'redux';


const MasterMiddleware = applyMiddleware(UserMiddleware, ImageMiddleware);

export default MasterMiddleware;
