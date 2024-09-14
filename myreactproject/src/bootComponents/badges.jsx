// import Badge from 'react-bootstrap/Badge';

// function BasicExample() {
//   return (
//     <div>
//       <h1>
//         Example heading <Badge bg="secondary">New</Badge>
//       </h1>
//       <h2>
//         Example heading <Badge bg="secondary">New</Badge>
//       </h2>
//       <h3>
//         Example heading <Badge bg="secondary">New</Badge>
//       </h3>
//       <h4>
//         Example heading <Badge bg="secondary">New</Badge>
//       </h4>
//       <h5>
//         Example heading <Badge bg="secondary">New</Badge>
//       </h5>
//       <h6>
//         Example heading <Badge bg="secondary">New</Badge>
//       </h6>
//     </div>
//   );
// }

// export default BasicExample;

import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function VariationsExample() {
  return (
    <Stack direction="horizontal" gap={3}>
      <Badge pill bg="primary">Primary</Badge>
      <Badge bg="secondary">Secondary</Badge>
      <Badge bg="success">Success</Badge>
      <Badge bg="danger">Danger</Badge>
      <Badge bg="warning" text="dark">
        Warning
      </Badge>
      <Badge bg="info">Info</Badge>
      <Badge bg="light" text="dark">
        Light
      </Badge>
      <Badge bg="dark">Dark</Badge>
    </Stack>
  );
}

export default VariationsExample;