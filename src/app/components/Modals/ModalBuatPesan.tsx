import { DFlexJustifyBetween, DFlexJustifyStart } from '@app/styled/flex.styled';
import React, { useRef, useState } from 'react';
import { Button, Dropdown, DropdownButton, Form, Modal } from 'react-bootstrap';
import { DropDirection } from 'react-bootstrap/esm/DropdownContext';
import styled from 'styled-components';
import { DropdownBuatPesanModalIcon } from '../Icons/DropdownBuatPesanModalIcon';
import { FullscreenIcon } from '../Icons/FullscreenIcon';
import { MinimizeIcon } from '../Icons/MinimizeIcon';
import { ModalCloseIcon } from '../Icons/ModalCloseIcon';
import { MoreIcon } from '../Icons/MoreIcon';
import { PaperClipIcon } from '../Icons/PaperClipIcon';
import { RightArrowIcon } from '../Icons/RightArrowIcon';
import UrgencyIcon from '../Icons/UrgencyIcon';

const ModalBuatPesan: React.FC<{ show: boolean; handleClose: () => void }> = ({ show, handleClose }) => {
  const [minimized, setMinimized] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  // const editor = useRef<any | null>()
  const direction: DropDirection = 'end';

  const [selectedPenerima, setSelectedPenerima] = useState('');
  const [selectedUrgency, setSelectedUrgency] = useState('');

  const handleChangeTemplateData = (e: any) => {
    console.log(e)
    // setValue("template", e)
  }

  const handleSelectPenerima = (eventKey: any) => {
    setSelectedPenerima(eventKey);
  };

  const handleSelectUrgency = (eventKey: any) => {
    setSelectedUrgency(eventKey);
  };

  return (
    <StyledModal show={show} onHide={handleClose} >
      <Header>
        <Modal.Title>Pesan Baru</Modal.Title>
        <ControlButtons>
          <button onClick={() => setMinimized(!minimized)}><MinimizeIcon /></button>
          <button onClick={() => setFullscreen(!fullscreen)}><FullscreenIcon /></button>
          <button onClick={handleClose}><ModalCloseIcon /></button>
        </ControlButtons>
      </Header>
      {!minimized && (
        <Modal.Body className='p-2'>
          <DFlexJustifyStart className='py-1' style={{ borderBottom: '1px solid #EDEFF1', alignItems: 'center', display: 'flex' }}>
            {/* <DropdownPenerima /> */}
            <StyledDropdownButton
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              title={<span>Penerima <DropdownBuatPesanModalIcon /></span>}
              onSelect={handleSelectPenerima}

            >
              <StyledDropdownItem eventKey="Kaur Umum">
                <DFlexJustifyBetween className='align-items-center fs-5 fw-bold mb-2'>
                  <p className='m-0'>Kaur Umum</p>
                  <RightArrowIcon />
                </DFlexJustifyBetween>
              </StyledDropdownItem>
              <StyledDropdownItem eventKey="Kades">
                <DFlexJustifyBetween className='align-items-center fs-5 fw-bold mb-2'>
                  <p className='m-0'>Kades</p>
                  <Form.Check style={{ marginTop: '-20px', marginRight: '-7px' }}
                    type="checkbox"
                    id="custom-checkbox"
                  />
                </DFlexJustifyBetween>
              </StyledDropdownItem>
              <StyledDropdownItem eventKey="Sekdes">
                <DFlexJustifyBetween className='align-items-center fs-5 fw-bold mb-2'>
                  <p className='m-0'>Sekdes</p>
                  <Form.Check style={{ marginTop: '-20px', marginRight: '-7px' }}
                    type="checkbox"
                    id="custom-checkbox"
                  />
                </DFlexJustifyBetween>
              </StyledDropdownItem>
              <StyledDropdownItem eventKey="Kasi">
                <DFlexJustifyBetween className='align-items-center fs-5 fw-bold mb-2'>
                  <p className='m-0'>Kasi</p>
                  <RightArrowIcon />
                </DFlexJustifyBetween>
              </StyledDropdownItem>
              <StyledDropdownItem eventKey="Kaur">
                <DFlexJustifyBetween className='align-items-center fs-5 fw-bold'>
                  <p className='m-0'>Kaur</p>
                  <RightArrowIcon />
                </DFlexJustifyBetween>
              </StyledDropdownItem>

            </StyledDropdownButton>
            <Form.Control type="text" className='border-0 bg-transparent' value={selectedPenerima} readOnly />
          </DFlexJustifyStart>
          <DFlexJustifyStart className='py-1' style={{ borderBottom: '1px solid #EDEFF1', alignItems: 'center' }}>
            <p className='m-0 ms-2 me-4' style={{ color: "var(--black)" }}>Judul</p>
            <Form.Control type="text" className='border-0' />
          </DFlexJustifyStart>
          <DFlexJustifyStart className='py-1' style={{ borderBottom: '1px solid #EDEFF1', alignItems: 'center', display: 'flex' }}>
            <StyledDropdownButton
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              title={<p>Urgensi<span className='ms-1'><DropdownBuatPesanModalIcon /></span></p>}
              onSelect={handleSelectUrgency}

            >
              <Dropdown.Item eventKey="Mendesak"> <UrgencyIcon color='#D71920' /> <span style={{ marginInlineStart: '0.2rem' }}>Mendesak</span></Dropdown.Item>
              <Dropdown.Item eventKey="Segera"><UrgencyIcon color='#FF6B00' /><span className='ms-1'>Segera</span></Dropdown.Item>
              <Dropdown.Item eventKey="Biasa"><UrgencyIcon color='#28903B' /><span className='ms-1'>Biasa</span></Dropdown.Item>
            </StyledDropdownButton>
            <Form.Control type="text" className='border-0 bg-transparent' value={selectedUrgency} readOnly />
          </DFlexJustifyStart>
          <EditorContainer>
            <Form.Group>
              {/* <Editor
                ref={editor}
                initialData={''}
                onChange={handleChangeTemplateData}
              /> */}
            </Form.Group>
          </EditorContainer>
        </Modal.Body>
      )
      }
      <Modal.Footer className='px-2 py-1'>
        <DFlexJustifyStart className='w-100 gap-2'>
          <Button className='bg-transparent shadow-none px-3' style={{ borderColor: "var(--black)", color: "var(--black)" }}>Batal</Button>
          <Button className='px-3'>Kirim</Button>
          <Button className='fw-bolder text-primary border-0 shadow-none px-2' style={{ backgroundColor: "#D8DFDD" }}>
            <span style={{ borderBottom: "4px solid var(--primary)" }}>A</span>
          </Button>
          <Button className='bg-transparent shadow-none border-0'>
            <PaperClipIcon />
          </Button>
          <Button className='bg-transparent shadow-none border-0'>
            <MoreIcon />
          </Button>
        </DFlexJustifyStart>
      </Modal.Footer>
    </StyledModal >
  );
};

export default ModalBuatPesan;

const Header = styled(Modal.Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 0.8rem;
  color: white;
`;

const ControlButtons = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

const StyledModal = styled(Modal)`
  .modal-dialog {
    position: fixed;
    bottom: 0;
    right: 3.2rem;
    margin: 0;
    width: auto;
  }
  .modal-content {
    border-radius: 0.5rem;
  }
`;

const EditorContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;

`;

const StyledDropdownMenu = styled(Dropdown.Menu)`
margin-left: 20%;
background-color: #F2F2F2;
`

const StyledDropdownButton = styled(DropdownButton)`
background-color:transparent;

.btn-primary {
background-color:transparent;
color: var(--black);
border: 0;
box-shadow: none;
}

.btn-primary.dropdown-toggle {
    color: var(--black);
    background-color: transparent;
    border: 0;
    box-shadow: none;
    outline: none;
}

.btn-primary.dropdown-toggle:focus {
    box-shadow: none ;
}
`
const StyledDropdownItem = styled(Dropdown.Item)`
padding: 0px 5px 0px 5px;
margin: 0px;
`