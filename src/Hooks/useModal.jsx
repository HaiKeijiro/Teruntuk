import { useState, useCallback } from 'react';

const useMultiModal = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = useCallback((modalName) => {
    setActiveModal(modalName);
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  const isModalOpen = useCallback((modalName) => {
    return activeModal === modalName;
  }, [activeModal]);

  return {
    isModalOpen,
    openModal,
    closeModal,
  };
};

export default useMultiModal;
