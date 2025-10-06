'use client';
import Section from '@/components/layout/header/section';
import { cards } from '@/lib/data/cards';
import Card from './card';
export default function CardsList() {
  return (
    <Section>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {cards.map(card => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            icon={card.icon}
            color={card.color}
            number={card.number}
            text={card.text}
          />
        ))}
      </div>
    </Section>
  );
}
