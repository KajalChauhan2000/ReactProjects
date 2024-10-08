// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

// function VerticalExample() {
//   return (
//     <ButtonGroup vertical>
//       <Button>Button</Button>
//       <Button>Button</Button>

//       <DropdownButton
//         as={ButtonGroup}
//         title="Dropdown"
//         id="bg-vertical-dropdown-1"
//       >
//         <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
//         <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
//       </DropdownButton>

//       <Button>Button</Button>
//       <Button>Button</Button>

//       <DropdownButton
//         as={ButtonGroup}
//         title="Dropdown"
//         id="bg-vertical-dropdown-2"
//       >
//         <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
//         <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
//       </DropdownButton>

//       <DropdownButton
//         as={ButtonGroup}
//         title="Dropdown"
//         id="bg-vertical-dropdown-3"
//       >
//         <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
//         <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
//       </DropdownButton>
//     </ButtonGroup>
//   );
// }

// export default VerticalExample;

import Button from 'react-bootstrap/Button';

function TypesExample() {
  return (
    <>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </>
  );
}

export default TypesExample;