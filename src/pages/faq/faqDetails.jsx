import Accordion from "react-bootstrap/Accordion";
const FaqDetails = ({ header, body }) => {
  return (
    <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{header}</Accordion.Header>
        <Accordion.Body>{body}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default FaqDetails;
