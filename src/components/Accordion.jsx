import {
  CAccordion,
  CAccordionHeader,
  CAccordionBody,
  CAccordionItem,
} from "@coreui/react";

const Accordion = () => {
  return (
    <>
      <h2 className="h2 text-center p-5" id="faq">
        Frequently Asked Questions (FAQ)
      </h2>
      <CAccordion alwaysOpen activeItemKey={2} className="p-5">
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Accordion Item #1</CAccordionHeader>
          <CAccordionBody>
            <strong>This is the first item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={2}>
          <CAccordionHeader>Accordion Item #2</CAccordionHeader>
          <CAccordionBody>
            <strong>This is the second item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={3}>
          <CAccordionHeader>Accordion Item #3</CAccordionHeader>
          <CAccordionBody>
            <strong>This is the second item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </>
  );
};

export default Accordion;
