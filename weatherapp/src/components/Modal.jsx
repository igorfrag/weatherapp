import { useRef } from 'react';

export default function Modal({ modalRef, onSubmit }) {
    const inputRef = useRef(null);
    const openModal = () => {
        modalRef.current?.showModal();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const city = inputRef.current.value.trim();
        if (city) {
            onSubmit(city);
            inputRef.current.value = '';
        }
    };

    return (
        <div className='modal'>
            <button onClick={openModal}>New Tracker</button>
            <dialog ref={modalRef} className='modal'>
                <p>Type city to be tracked:</p>
                <form onSubmit={handleSubmit}>
                    <input type='text' ref={inputRef} id='city-name' />{' '}
                    <div>
                        <button onClick={() => modalRef.current?.close()}>
                            Close
                        </button>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </dialog>
        </div>
    );
}
