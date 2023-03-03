import {
  CAccordion,
  CAccordionHeader,
  CAccordionBody,
  CAccordionItem,
} from "@coreui/react";

const Accordion = ({ questions }) => {
  return (
    <>
      <CAccordion alwaysOpen activeItemKey={1} className="p-5">
        {questions.map((question, i) => (
          <CAccordionItem itemKey={i + 1}>
            <CAccordionHeader>{question.question}</CAccordionHeader>
            <CAccordionBody>{question.answer}</CAccordionBody>
          </CAccordionItem>
        ))}
      </CAccordion>
    </>
  );
};

export default Accordion;
