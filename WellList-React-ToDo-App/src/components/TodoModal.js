import React from 'react';
import { MdOutlineClose } from 'react-icons/md';
import styles from '../styles/modules/modal.module.scss';
import MyButton from './MyButton';

function TodoModal(modalOpen, setModalOpen) {
  return (
    <div>
      {modalOpen && (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.closeButton}>
              <MdOutlineClose />
            </div>
            <form className={styles.form}>
              <h1 className={styles.formTitle}>Add Task</h1>
              <label htmlFor="title">
                Title
                <input type="text" id="title" />
              </label>

              <label htmlFor="status">
                Status
                <select name="status" id="status">
                  <option value="all">All</option>
                  <option value="incomplete">Incomplete</option>
                  <option value="complete">Complete</option>
                </select>
              </label>
              <div className={styles.buttonContainer}>
                <MyButton type="submit" variant="primary">
                  Add Task
                </MyButton>
                <MyButton type="button" variant="secondary">
                  Cancel
                </MyButton>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoModal;
