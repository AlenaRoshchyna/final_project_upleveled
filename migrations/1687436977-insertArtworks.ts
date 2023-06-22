import { Sql } from 'postgres';

export const artworks = [
  {
    id: 1,
    name: 'Tranquil Whispers',
    url: 'https://res.cloudinary.com/dyaycvndv/image/upload/v1687435782/Wada_Art/22_mqzyg8.jpg',
    description:
      'A serene composition capturing the delicate whispers of calmness.',
    category: 'Pigment liner',
  },
  {
    id: 2,
    name: 'Essence of Silence',
    url: 'https://res.cloudinary.com/dyaycvndv/image/upload/v1687435780/Wada_Art/4_nacqqh.jpg',
    description:
      'A powerful depiction of the profound beauty found within silence.',
    category: 'Pigment liner',
  },
  {
    id: 3,
    name: 'Boundless Serenity',
    url: 'https://res.cloudinary.com/dyaycvndv/image/upload/v1687435780/Wada_Art/23_ug9gvh.jpg',
    description:
      'An expansive portrayal of tranquil serenity that knows no bounds.',
    category: 'Pigment liner',
  },
  {
    id: 4,
    name: 'Simplicity Revealed',
    url: '50',
    description:
      'A captivating exploration of beauty found in the essence of simplicity.',
    category: 'Pigment liner',
  },
  {
    id: 5,
    name: 'Harmony in Hues',
    url: 'https://res.cloudinary.com/dyaycvndv/image/upload/v1687435781/Wada_Art/8_xshgtk.jpg',
    description:
      'A harmonious blend of emotions, evoking a sense of peaceful unity.',
    category: 'Pigment liner',
  },
  {
    id: 6,
    name: 'Silent Elegance',
    url: 'https://res.cloudinary.com/dyaycvndv/image/upload/v1687435782/Wada_Art/18_gp95gw.jpg',
    description:
      'A refined and graceful representation of elegance in stillness.',
    category: 'Pigment liner',
  },
  {
    id: 7,
    name: 'Sublime Zenith',
    url: 'https://res.cloudinary.com/dyaycvndv/image/upload/v1687435780/Wada_Art/27_i4miwh.jpg',
    description:
      'An awe-inspiring portrayal of the highest state of peacefulness and enlightenment.',
    category: 'Pigment liner',
  },
  {
    id: 8,
    name: 'Whispering Shadows',
    url: 'https://res.cloudinary.com/dyaycvndv/image/upload/v1687435782/Wada_Art/21_uzkw4t.jpg',
    description:
      'Delicate shadows that whisper softly, creating a tranquil and mysterious atmosphere.',
    category: 'Pigment liner',
  },
  {
    id: 9,
    name: 'Reflective Tranquility',
    url: 'https://res.cloudinary.com/dyaycvndv/image/upload/v1687435781/Wada_Art/6_aljoon.jpg',
    description:
      'A contemplative piece that evokes a deep sense of calmness and inner reflection.',
    category: 'Pigment liner',
  },
  {
    id: 10,
    name: 'Stillness Unveiled',
    url: 'https://res.cloudinary.com/dyaycvndv/image/upload/v1687435780/Wada_Art/25_aujkyq.jpg',
    description:
      'The unveiling of quietude, capturing the beauty of undisturbed stillness.',
    category: 'Pigment liner',
  },
  {
    id: 11,
    name: 'Ethereal Moments',
    url: 'https://res.cloudinary.com/dyaycvndv/image/upload/v1687435781/Wada_Art/11_sd4kr2.jpg',
    description:
      'Transient and otherworldly moments suspended in an ethereal ambiance',
    category: 'Pigment liner',
  },
  {
    id: 12,
    name: 'Serene Abstraction',
    url: 'https://res.cloudinary.com/dyaycvndv/image/upload/v1687435780/Wada_Art/2_eq9mnt.jpg',
    description:
      'An abstract composition that exudes a serene and peaceful essence.',
    category: 'Pigment liner',
  },
];

export async function up(sql: Sql) {
  for (const artwork of artworks) {
    await sql`
    INSERT INTO artworks
      (name, url, description, category)
    VALUES
      (${artwork.name}, ${artwork.url}, ${artwork.description}, ${artwork.category})
    `;
  }
}

export async function down(sql: Sql) {
  for (const artwork of artworks) {
    await sql`
      DELETE FROM artworks WHERE id = ${artwork.id}
    `;
  }
}
