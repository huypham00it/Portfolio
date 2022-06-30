import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';
import testimonials from './testimonials';
import about from './about';
import brands from './brands';
import contact from './contact';
import experiences from './experiences';
import skills from './skills';
import works from './works';
import workExperience from './workExperience';
import social from './social';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    testimonials,
    about,
    brands,
    contact,
    experiences,
    workExperience,
    skills,
    works,
    social
  ]),
})
