import { Sql } from 'postgres';

export const artworks = [
  {
    id: 1,
    name: 'Tranquil Whispers',
    url: 'https://res.cloudinary.com/dyaycvndv/image/upload/v1687435782/Wada_Art/22_mqzyg8.jpg',
    description:
      'A serene composition capturing the delicate whispers of calmness. It delicately captures the ethereal essence of serenity. With every gaze, one can almost hear the faint whispers of natures secrets, offering solace and a moment of respite from the chaos of the world. "Tranquil Whispers" beckons to a tranquil realm, where peace resides in every delicate detail.',
    category: 'Pigment liner',
  },
  {
    id: 2,
    name: 'Essence of Silence',
    url: 'https://res.cloudinary.com/dyaycvndv/image/upload/v1687435780/Wada_Art/4_nacqqh.jpg',
    description:
      'A powerful depiction of profound beauty found within silence. The artwork emanates a captivating aura, inviting viewers to embrace the stillness and tranquility it portrays. Through a skillful fusion of shadows and light, the artist evokes a sense of depth and mystery. In this mesmerizing composition, silence becomes tangible, enveloping observers in its serene embrace.',
    category: 'Pigment liner',
  },
  {
    id: 3,
    name: 'Boundless Serenity',
    url: 'https://res.cloudinary.com/dyaycvndv/image/upload/v1687435780/Wada_Art/23_ug9gvh.jpg',
    description:
      'Unveils an expansive portrayal of tranquil serenity that knows no bounds. The artwork encompasses a vast expanse of calmness, stretching beyond the limits of perception. "Boundless Serenity" invites contemplation, evoking a sense of inner harmony and reminding us of the unbounded serenity that lies within ourselves and the world around us.',
    category: 'Pigment liner',
  },
  {
    id: 4,
    name: 'Simplicity Revealed',
    url: 'https://res.cloudinary.com/dyaycvndv/image/upload/v1687435781/Wada_Art/28_txcbda.jpg',
    description:
      'A captivating exploration of the beauty found in the essence of simplicity. The artwork unravels a profound visual narrative, celebrating the elegance of minimalism. It unveils a world where every element has purpose and meaning.  "Simplicity Revealed" is a gentle reminder that true beauty can be found in the understated and unadorned.',
    category: 'Pigment liner',
  },
  {
    id: 5,
    name: 'Harmony in Hues',
    url: 'https://res.cloudinary.com/dyaycvndv/image/upload/v1687435781/Wada_Art/8_xshgtk.jpg',
    description:
      'A harmonious blend of emotions, evoking a sense of peaceful unity. The artwork invites viewers to bask in its gentle embrace, stirring a deep sense of serenity and balance. "Harmony in Hues" serves as a reminder that despite the diversity of emotions, they can harmoniously coexist, bringing a tranquil unity to our inner world.',
    category: 'Pigment liner',
  },
  {
    id: 6,
    name: 'Silent Elegance',
    url: 'https://res.cloudinary.com/dyaycvndv/image/upload/v1687435782/Wada_Art/18_gp95gw.jpg',
    description:
      'A refined and graceful representation of elegance in stillness. The artwork exudes a sense of poise and sophistication, capturing the essence of quiet beauty. With gentle brushstrokes and delicate details, the artist unveils a composition that speaks volumes. Each element harmonizes in perfect balance, evoking a serene atmosphere of contemplation.',
    category: 'Pigment liner',
  },
  {
    id: 7,
    name: 'Sublime Zenith',
    url: 'https://res.cloudinary.com/dyaycvndv/image/upload/v1687435780/Wada_Art/27_i4miwh.jpg',
    description:
      'An awe-inspiring artwork of peacefulness and enlightenment. It radiates an ethereal aura, drawing viewers into a realm of profound tranquility. Brilliant hues blend harmoniously, illuminating the path towards spiritual awakening. Through meticulous strokes, the artist captures the essence of serenity, guiding observers of inner calm.',
    category: 'Pigment liner',
  },
  {
    id: 8,
    name: 'Whispering Shadows',
    url: 'https://res.cloudinary.com/dyaycvndv/image/upload/v1687435782/Wada_Art/21_uzkw4t.jpg',
    description:
      'Delicate shadows that whisper softly, creating a tranquil and mysterious atmosphere. The artwork breathes life into intangible realms, where ethereal whispers linger in the air. Subtle shades blend seamlessly, evoking a sense of serenity tinged with intrigue. It invites us to listen closely to the murmurs of hidden secrets and embark on a journey of discovery.',
    category: 'Pigment liner',
  },
  {
    id: 9,
    name: 'Reflective Tranquility',
    url: 'https://res.cloudinary.com/dyaycvndv/image/upload/v1687435781/Wada_Art/6_aljoon.jpg',
    description:
      'A contemplative piece that evokes a deep sense of calmness and inner reflection. As gentle ripples caress a serene pond, the scene mirrors the stillness of the soul, prompting a profound connection with ones inner self. "Reflective Tranquility" serves as a reminder to embrace moments of stillness, allowing for quiet contemplation and the discovery of inner peace.',
    category: 'Pigment liner',
  },
  {
    id: 10,
    name: 'Stillness Unveiled',
    url: 'https://res.cloudinary.com/dyaycvndv/image/upload/v1687435782/Wada_Art/1_stowse.jpg',
    description:
      'Captures the beauty of undisturbed stillness, unveiling the essence of quietude. The artwork exudes a serene aura, where silence reigns supreme. With gentle strokes and subtle nuances, the artist portrays a world untouched by chaos. Through its simplicity, "Stillness Unveiled" invites viewers to appreciate the profound beauty found in moments of tranquil calm.',
    category: 'Pigment liner',
  },
  {
    id: 11,
    name: 'Ethereal Moments',
    url: 'https://res.cloudinary.com/dyaycvndv/image/upload/v1687435781/Wada_Art/11_sd4kr2.jpg',
    description:
      'Suspends transient and otherworldly experiences within ambiance. The artwork captures fleeting glimpses of wonder, transcending the boundaries of our reality. With dreamlike brushstrokes, it invites viewers to immerse themselves in the mystical. It reveals the delicate essence of the intangible, igniting a sense of awe and enchantment within the observer.',
    category: 'Pigment liner',
  },
  {
    id: 12,
    name: 'Serene Abstraction',
    url: 'https://res.cloudinary.com/dyaycvndv/image/upload/v1687435780/Wada_Art/2_eq9mnt.jpg',
    description:
      'Exudes a peaceful essence through its abstract composition. Flowing forms dance harmoniously, evoking a calm atmosphere. This artwork invites viewers to surrender to the tranquility within, embracing the soothing power of abstraction. It embodies the calmness that emerges from the interplay of shapes and lines, providing a respite from the complexities of the world.',
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
