import * as React from 'react';
import './index.css';
import { Modal } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { getModalVisible, getError} from '../../store/actions/actions';
import Preloader from '../../components/preloader';
import ErrorBox from '../error';

// Компонент вывода блока модального окна
const ModalBox = (): React.FunctionComponentElement<void> => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state: any) => state.rights.isLoadingRights);
    const isModalVisible = useSelector((state: any) => state.rights.isModalVisible);
    const errorData = useSelector((state: any) => state.rights.errorData);

    if(errorData === null || errorData.type !== "modal"){
        dispatch(getError({type:"modal", message:"Пожалуйста, проверьте логин или ФИО пользователя!"}));
    } 

    // Функция закрытия модального окна
    const handleClose = React.useCallback(() => {
        dispatch(getModalVisible());
        dispatch({ type: 'HANDLE_MODAL' });
    }, []);

    return (
        <Modal footer={null} visible={isModalVisible} className="dialog__window" onCancel={handleClose} destroyOnClose={true}>
            {
                // Если идет загрузка, выводим прелоадер
                isLoading 
                ? <Preloader position={"relative"} /> 
                //Иначе ошибку
                :  <ErrorBox />
            }
        </Modal>
    );
}
export default ModalBox;