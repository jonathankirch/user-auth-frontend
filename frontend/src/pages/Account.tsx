import { useState } from 'react'
import ModalCustom from '../components/ModalCustom'

function Account() {
  const [openNameChange, setOpenNameChange] = useState(false)
  const handleOpenNameChange = () => setOpenNameChange(true)
  const handleCloseNameChange = () => setOpenNameChange(false)

  const [openEmailChange, setOpenEmailChange] = useState(false)
  const handleOpenEmailChange = () => setOpenEmailChange(true)
  const handleCloseEmailChange = () => setOpenEmailChange(false)

  const [openPasswordChange, setOpenPasswordChange] = useState(false)
  const handleOpenPasswordChange = () => setOpenPasswordChange(true)
  const handleClosePasswordChange = () => setOpenPasswordChange(false)

  return (
    <>
      <section className="text-center mt-14">
        <h1 className="text-3xl font-bold mb-5">Account Settings</h1>
        <div className="flex flex-col justify-center items-center">
          <button
            onClick={handleOpenNameChange}
            className="bg-gray-600 border border-gray-950 rounded p-1 text-gray-300 font-bold mb-2">
            Change name
          </button>

          <button
            onClick={handleOpenEmailChange}
            className="bg-gray-600 border border-gray-950 rounded p-1 text-gray-300 font-bold mb-2">
            Change email
          </button>
          <button
            onClick={handleOpenPasswordChange}
            className="bg-gray-600 border border-gray-950 rounded p-1 text-gray-300 font-bold mb-2">
            Change password
          </button>
          <button className="bg-gray-600 border border-gray-950 rounded p-1 text-gray-300 font-bold">
            Delete account
          </button>
        </div>
      </section>

      {/* Modals */}
      <ModalCustom
        title="Name Change"
        description="descrição do modal 1"
        open={openNameChange}
        onClose={handleCloseNameChange}
      />
      <ModalCustom
        title="Email Change"
        description="descrição do modal 1"
        open={openEmailChange}
        onClose={handleCloseEmailChange}
      />
      <ModalCustom  
        title="Password Change"
        description="descrição do modal 1"
        open={openPasswordChange}
        onClose={handleClosePasswordChange}
      />
    </>
  )
}

export default Account
