import { Modal } from '@mui/material'

function ModalCustom({title, description, open, onClose}: { title: string; description: string; open: boolean; onClose: () => void }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <section className="border bg-gray-800 text-center w-1/2 m-auto mt-16">
        <h2 className='text-2xl'>
          {title}
        </h2>
        <p>
          {description}
        </p>
        <div className="flex justify-end gap-5 m-2">
          <button onClick={onClose} className="border px-1">
            Cancelar
          </button>
          <button className="border px-1">Salvar</button>
        </div>
      </section>
    </Modal>
  )
}

export default ModalCustom
