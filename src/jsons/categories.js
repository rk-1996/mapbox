import {EAQImg, EDUImg, EHSImg, EIImg, EWSImg, SHImg} from "../assets/img/images";

export const categories = [
  {
    id: 1,
    category: 'Environmental',
    subCategory: [
      {
        id: 1,
        name: 'Heat Stress',
        img: EHSImg
      },
      {
        id: 2,
        name: 'Air Quality',
        img: EAQImg
      },
      {
        id: 3,
        name: 'Climate Risk Resiliency',
         img: EHSImg
      },
      {
        id: 4,
        name: 'Water Stress',
         img: EAQImg
      },
      {
        id: 5,
        name: 'Sea leve rise and coastal flooding',
         img: EHSImg
      },
      {
        id: 6,
        name: 'Carbon Emissions',
         img: EAQImg
      }
    ]
  },
  {
    id: 2,
    category: 'Economy',
    subCategory: [
      {
        id: 1,
        name: 'Gini Coefficient',
        img: EIImg
      },
      {
        id: 2,
        name: 'Water Scarcity',
        img: EWSImg
      },
      {
        id: 3,
        name: 'Infrastructure',
        img: EIImg
      },
      {
        id: 4,
        name: 'Green Jobs',
        img: EWSImg
      },
      {
        id: 5,
        name: 'Urban Sprawl/Greenness',
        img: EIImg
      },
      {
        id: 6,
        name: 'Automated/AI',
        img: EWSImg
      }
    ]
  },
  {
    id: 3,
    category: 'Social/Health',
    subCategory: [
      {
        id: 1,
        name: 'Gender Equality',
        img: SHImg
      },
      {
        id: 2,
        name: 'Ethnic/Racial Discovery',
        img: EWSImg
      },
      {
        id: 3,
        name: 'Racial Tensions',
        img: SHImg
      },
      {
        id: 4,
        name: 'Health & Wellness',
        img: EWSImg
      },
      {
        id: 5,
        name: 'COVID-19 Resiliency',
        img: SHImg
      },
    ]
  },
  {
    id: 4,
    category: 'Education',
    subCategory: [
      {
        id: 1,
        name: 'Academic Achievement Gap',
        img: EDUImg
      },
      {
        id: 2,
        name: 'Teacher Support',
        img: EIImg
      }
    ]
  },
  {
    id: 5,
    category: 'Infrastructure',
    subCategory: [
      {
        id: 1,
        name: 'Water Security',
        img: EWSImg
      },
      {
        id: 2,
        name: 'Infrastructure',
        img: EIImg
      },
      {
        id: 3,
        name: 'Digital Divide & Digital Preparedness',
        img: EWSImg
      }
    ]
  }
]
