import Banner from '@/component/Banner';
import FeaturedLawyers from '@/component/FeaturedLawyers';
import LegalCategories from '@/component/LegalCategories';
import TopLegalExperts from '@/component/TopLegalExperts';
import { feature } from '@/lib/api/home';
import React from 'react';

const app = async() => {
  const lawyers = await feature()

  return (
    <div>

      <Banner></Banner>
      <FeaturedLawyers lawyers={lawyers}></FeaturedLawyers>
      
      <LegalCategories></LegalCategories>
      <TopLegalExperts></TopLegalExperts>
    </div>
  );
};

export default app;