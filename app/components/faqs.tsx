//use of accordion from shadcn/ui
import faqs from "@/app/data/faqs.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const AccordionsSection = () => {
  return (
    <div className="bg-black">
      <div className="max-w-screen-xl px-10 py-14 mx-auto grid grid-cols-2 gap-10">
        <Accordion type="single" collapsible className="flex flex-col gap-4">
          {faqs.map(
            (data, index) =>
              index % 2 === 0 && (
                <AccordionItem key={index} value={`item -${index}`}>
                  <AccordionTrigger className="text-white">
                    {data.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white">
                    {data.answer}
                  </AccordionContent>
                </AccordionItem>
              )
          )}
        </Accordion>
        <Accordion type="single" collapsible className="flex flex-col gap-4">
          {faqs.map(
            (data, index) =>
              index % 2 !== 0 && (
                <AccordionItem key={index} value={`item -${index}`}>
                  <AccordionTrigger className="text-white">
                    {data.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white">
                    {data.answer}
                  </AccordionContent>
                </AccordionItem>
              )
          )}
        </Accordion>
      </div>
    </div>
  );
};
export default AccordionsSection;
