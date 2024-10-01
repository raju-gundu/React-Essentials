import CoreConcept from "../CoreConcept/CoreConcept.jsx";
import { CORE_CONCEPTS } from "../../data.js";
import Section from "../Section/Section.jsx";

export default function CoreConcepts(){
    return(
        <Section title="Core Concepts" id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((concept) => <CoreConcept key={concept.title} {...concept} />)}
          </ul>
        </Section>
    );
}