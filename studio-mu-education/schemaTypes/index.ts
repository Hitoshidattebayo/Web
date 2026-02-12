import { postType as post } from './post'
import hero from './hero'
import whoWeHelp from './whoWeHelp'
import process from './process'
import services from './services'
import about from './about'
import cta from './cta'
import testimonials from './testimonials'
import socialProof from './socialProof'
import calendar from './calendar'
import faq from './faq'

import { calculatorConfig } from './calculatorConfig'

// CIA Schemas
import ciaHero from './cia/ciaHero'
import ciaIntro from './cia/ciaIntro'
import ciaCampusLife from './cia/ciaCampusLife'
import ciaDormitory from './cia/ciaDormitory'
import ciaCurriculum from './cia/ciaCurriculum'
import ciaFaq from './cia/ciaFaq'
import ciaStudentImprovement from './cia/ciaStudentImprovement'

export const schemaTypes = [
    post,
    hero,
    whoWeHelp,
    process,
    services,
    about,
    cta,
    testimonials,
    socialProof,
    calendar,
    faq,
    calculatorConfig,

    // CIA
    ciaHero,
    ciaIntro,
    ciaCampusLife,
    ciaDormitory,
    ciaCurriculum,
    ciaFaq,
    ciaStudentImprovement
]
