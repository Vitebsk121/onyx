import sandPic from '../public/images/sand.jpg';
import stonePic from '../public/images/crushStone.jpg';
import gravelPic from '../public/images/gravel.jpg';
import dropoutPic from '../public/images/dropout.jpg';
import { StaticImageData } from 'next/image';
import CS_GranitePic from '../public/images/cat_crushstone/granite.jpeg';
import CS_GravelPic from '../public/images/cat_crushstone/gravel_stone.jpeg';
import CS_LimestonePic from '../public/images/cat_crushstone/limestone.jpeg';
import CS_SecondaryStonePic from '../public/images/cat_crushstone/secondary_stone.jpeg';
import S_QuarryPic from '../public/images/cat_sand/quarry.jpeg';
import S_RiverPic from '../public/images/cat_sand/river.jpeg';
import S_WashedPic from '../public/images/cat_sand/washed.jpeg';
import D_Granite_GravelPic from '../public/images/cat_dropout/granite_gravel.png';
import D_LimestonePic from '../public/images/cat_dropout/limestone.jpeg';

export interface IGoods {
  name: string;
  image: StaticImageData;
  title: string;
  description: string[];
  categories?: {
    title: string;
    categor: string[];
  };
  content: {
    title?: string;
    subtitles?: string[];
  };
  slider?: {
    image: StaticImageData;
    title: string;
    descriptions: string[];
  }[];
}

const goodsList: IGoods[] = [
  {
    name: 'gravel',
    image: gravelPic,
    title: 'Гравий',
    description: [
      'Гравий – это неорганический сыпучий материал, который образовывается в естественных условиях при' +
        ' разрушении горных пород. Может содержать примеси - пыль, песок.',
    ],
    categories: {
      title: 'Гравий, как и щебень подразделяется на фракции:',
      categor: [
        'Фракция 5-20 (используется для бетонных работ);',
        'Фракция 20-40 (хорошо подходит для дренажных работ);',
        'Фракция 40-70 (основное применение - дорожные работы);',
      ],
    },
    content: {
      title: 'Как производится и где применяется гравий?',
      subtitles: [
        'Просеивание карьерной горной породы осуществляет открытый способ добычи гравия. Основное, существенное отличие гравия от щебня в том, что щебень является именно продуктом дробления. Гравий менее прочен, поэтому применение такого материала достаточно ограничено.',
        'Применяется в качестве подсыпки на дорожное полотно. Цена на гравий достаточно низка, что позволяет использовать его при создании подъездных дачных дорог, а также временных дорожных покрытий.',
      ],
    },
  },
  {
    name: 'crushstone',
    image: stonePic,
    title: 'Щебень',
    description: [
      'Щебень является неорганическим сыпучим материалом, размер зерен которого составляет от 5 мм и более. Плотность щебня составляет от 1,4 до 3 гр. на 1 кубический см. Также существует такое понятие как "еврощебень". Его фракции имеют размер от 3 мм.',
    ],
    categories: {
      title: 'Виды щебня по их использованию:',
      categor: [
        'Щебень 5-20 - используется для бетонных работы и ландшафтного дизайна;',
        'Щебень 20-40 - необходим для дренажных и фундаментных работ;',
        'Щебень 40-70 - применяется для дорожных и прочих строительных работ;',
      ],
    },
    content: {
      title: 'Как добывается щебень?',
      subtitles: [
        'Один из способов добычи щебня - это дробление разных горных пород, в том числе попутно добываемых, таких как гравий или крупные валуны. Второй - переработка отходов от производства предприятий, обрабатывающих руду или иных.',
        'Самыми распространенными видами щебня являются гранитный и гравийный. Сбыт известнякового и вторичного щебня также пользуется большим спросом в ряде областей строительства. Сбыт и транспортировка щебня зависит от целого ряда факторов, одним из самых основных является степень плоскостности материалов, чем более фракции щебня более кубически правильны, тем плотность утрамбовки лучше. Самыми неудобными в утрамбовке являются камни с пластинчатыми и игловидными формами, так как при их укладке образуется много незаполненных пустот.',
        'Щебень используется в качестве компонента бетона для благоустройства территории (как правило щебень из гранита из-за его декоративных качеств), в строительстве дорог и в создании железнодорожных путей.',
      ],
    },
    slider: [
      {
        image: CS_GranitePic,
        title: 'Гранитный щебень',
        descriptions: [
          'Гранитный щебень производится из гранита и является самой прочной горной породой, добываемой во всем мире.',
          'Классификация гранитного щебня:',
          '•\tФракция 5-20 мм (Применяют при производстве бетона, а также в других строительных целях)',
          '•\tФракция 20-40 мм (Сфера применения такой фракции связана с работами по фундаменту и благоустройству территорий)',
          '•\tФракция 40-70 мм (Предназначена для сооружения мостов, аэродромов и дорожного полотна)',
        ],
      },
      {
        image: CS_GravelPic,
        title: 'Гравийный щебень',
        descriptions: [
          'Такой щебень производится путем дробления каменной скальной породы, как и гранитный, но уступает последнему по прочности. Главным преимуществом гравийного щебня является его стоимость. Она ниже за счет сниженного качества материала и за счет того, что гравийные карьеры располагаются на территории МО. Соответственно, транспортировка такого щебня является менее длительной.',
          'Форма фракций щебня гравийного имеет округлую форму, имеющую морское и речное происхождение.',
          'Классификация гравийного щебня:',
          '•\tФракция 5-20 мм (Используется для производства бетона)',
          '•\tФракция 20-40 мм (Применяется для дренажа и строительных работ)',
          '•\tФракция 40-70 мм (Распространена при проведении дорожных работ)',
          'Другие фракции, более мелких или более крупных размеров, узко применяются, как правило в декоративных или вспомогательных целях).',
        ],
      },
      {
        image: CS_LimestonePic,
        title: 'Известняковый щебень',
        descriptions: [
          'Другое название известнякового щебня - доломитовый. Получают такой щебень с помощью дробления известняка - одной из самых распространенных осадочных горных пород.',
          'Щебень из известняка применяется, в основном, в строительстве дорог, а также при благоустройстве прилегающих территорий. Цена такого щебня в разы ниже, нежели гранитного или гравийного. Следствием этого является, что доломитовый щебень широко применяется при дорожном строительстве.',
          '\tКлассификация известнякового щебня:',
          '•\tФракция 5-20 (Распространена в области благоустройства)',
          '•\tФракция 20-40 (Широко применяется в сфере строительных работ)',
          '•\tФракция 40-70 (Используется для дорожного строительства)',
          'Мелкие фракции несут в строительстве вспомогательные функции, а крупные применяются в основном для строительства дорог. Цена известнякового щебеня в зависимости от фракции, меняется незначительно.',
        ],
      },
      {
        image: CS_SecondaryStonePic,
        title: 'Вторичный щебень',
        descriptions: [
          'Такой материал получается путем дробления различных строительных отходов (в основном асфальт, кирпич, бетон). Вторичный щебень имеет свой стандарт по регламенту ГОСТ 25137-82. Добыча такого щебня осуществляется с помощью того же оборудования, что и иных видов щебня, но отличается достаточно низкой ценой.',
          'Классифицируется такой щебень по многим важным критериям, например, морозостойкость, прочность, и др. Вторичный, в отличии от щебня, получаемого из природных материалов, сильно уступает в качестве. Однако он так же обрел широкое распространение в строительной деятельности. Его используют как крупно фракционный заполнитель для бетона, укрепления слабых грунтов, благоустройства различных территорий. Так же вторичный щебень получил достаточное распространение для закладки нижнего слоя дорог.',
          '\tКлассификация вторичного щебня:',
          '•\tФракция 5-20 (мелкая, самая распространенная фракция)',
          '•\tФракция 20-40 (средняя, оптимальная фракция, для строительства дорог)',
          '•\tФракция 40-70 (крупная, подходит для создания бетона)',
          'Иные фракции, не входящие в этот список, играют вспомогательную роль и применяются в различных задачах для строительства и благоустройства.',
        ],
      },
    ],
  },
  {
    name: 'sand',
    image: sandPic,
    title: 'Песок',
    description: [
      'Песок строительный (стандартизированный ГОСТ 8736-93) - это неорганический сыпучий ресурс, который является осадочной горной породой, а конкретнее продуктом естественного разрушения разных горных пород. Добыча песка происходит открытым способом при разработке природных месторождений, либо непосредственно из русла рек.\n',
      'Песок используется как самодостаточный элемент при создании насыпей и формировании областей для строительства, как необходимый элемент для целого ряда строительных материалов. Песок универсальный ресурс, его также используют и в декоративных целях, например, для создания ландшафтного дизайна и благоустройства территорий.\n',
    ],
    categories: {
      title: 'Строительный песок делится на 2 категории:',
      categor: ['речной;', 'карьерный;'],
    },
    content: {
      subtitles: [
        'Плотность карьерного песка составляет от 2 до 2,8г./см3, размер частиц от 0,5 мм. Сам карьерный песок представляет собой просеянный песок, добываемый в карьерах. Используется он в качестве необходимого заполнителя для разных материалов, таких как растворы, бетон, также важнейшей сферой применения является строительство дорог.',
        'Карьерный песок используется как для формирования основы, так и для покрытия. После гидротехнической обработки можно получить песок с уменьшенным количеством примесей – это мытый песок. Песок строительный используется для создания фундаментов, и получается методом просеивания.',
        'Речной песок добывается из русла рек и имеет отличие от карьерного - низкое содержание примесей. Такой материал является чистым, в нем нет крупных кусков, органических примесей, глины. Применяется в сферах, где необходим очищенный материал.',
      ],
    },
    slider: [
      {
        image: S_QuarryPic,
        title: 'Песок карьерный',
        descriptions: [
          'Песок карьерный делится на фракции:',
          '- мелкозернистая (0,5-1,6 мм)',
          '- среднезернистая (1,6-2,2 мм)',
          '- крупнозернистая (2,2-2,8 мм)',
          'Также песок карьерный можно разделить на две категории, по степени его очистки:',
          '- сеяный',
          '- намывной',
          'Сеяный карьерный песок очищается способом просеивания, что приводит к результату отделения мелких фракций от крупных. Такой вид песка применяют, в основном, для благоустройства территорий и отсыпки объектов, он является мелкозернистым.',
          'Намывной песок карьерный (мытый) очищается с помощью гидротехнического способа. Данный вид практически избавлен от глины, следствием этого сфера его применения - растворы, бетоны, дренажные работы. Такой песок является крупнозернистым.',
        ],
      },
      {
        image: S_RiverPic,
        title: 'Песок речной',
        descriptions: [
          'Песок речной добывается путем рытья карьеров и в руслах рек. Стоимость такого песка немного выше, чем у песка карьерного, из-за его свойств. Песок карьерный и песок речной не несут между собой конкуренции так как используются для разных целей.',
          'В речном песке очень ограниченное количество примесей, глины и крупных фракций. Что сильно отличает его от карьерного, поэтому дополнительная очистка такого песка не требуется.',
          'Классификация происходит по типу:',
          '-мелкозернистый (1,6-1,8 мм)',
          '-крупнозернистый',
          'Но при этом, размер частиц всегда меньше, чем у карьерного песка. В мелкозернистом речном он составляет: 1,6-1,8 мм, а размер крупнозернистого не превышает по этому показателю значения 2,2 мм.',
          'Применение такого песка, чаще всего, происходит в области создания дренажных систем, кладки, отделки стен и в других задачах по строительству.',
        ],
      },
      {
        image: S_WashedPic,
        title: 'Песок мытый',
        descriptions: [
          'Мытый песок используется для бетонных смесей',
          'Процент сторонних примесей в качественном песке не превышает 3%. Показатель достигается промыванием в большом количестве проточной воды. Такой песок применяется для производства бетона, изделий из него, обустройства фундаментов, кладки стен, мощения, отделочных работ.',
        ],
      },
    ],
  },
  {
    name: 'dropout',
    image: dropoutPic,
    title: 'Отсев',
    description: [
      'Стандартный дробленый камень имеет фракцию размером от 5 до 70 мм и выше. Зерна породы от 0,1 до 5 мм называются отсевом.',
    ],
    categories: {
      title: 'В зависимости от исходного сырья различают 3 основных его вида:',
      categor: ['гранитный;', 'гравийный;', 'известняковый;'],
    },
    content: {
      subtitles: [
        'Отходы дробления щебня по некоторым характеристикам и области применения близки к песчаному вторсырью. Однако, нужно помнить, что это два разных материала. Отличия отсевов от песка и щебня заключаются в следующем:',
        '•\t песчаный содержит большое количество посторонних примесей;',
        '•\t у него нет разделения по гранулометрическому составу; здесь могут оказаться и крупные камни (до 100 мм)' +
          ' и мелкий песок, что ограничивает использование такого сырья в некоторых сферах строительства.',
        'Применение отсевов дробления довольно разнообразно. Их задействуют в строительстве, сельском хозяйстве, полиграфии, при обустройстве приусадебных территорий, изготовлении стекла, и даже пищевой промышленности.',
        'Отсев гранитного щебня наряду с гравийным, применяется для отливки ЖБИ, отделки, бордюрного камня, тротуарной плитки, а также при укладке асфальтобетона или бетонного покрытия, в качестве декорирования для дорожек и клумб. В зимнее время им посыпают проезжую часть и тротуары для уменьшения скольжения. Без ущерба для качества, им можно заменить гравий в плотном бетоне, при этом ощутимо снизив себестоимость. Сырье из отходов переработки известняка используется в качестве наполнителя смесей на основе цемента, для облицовки стен, изготовления полимерных покрытий и плитки. Служит важным компонентом для производства некоторых видов удобрений в сельском хозяйстве.',
      ],
    },
    slider: [
      {
        image: D_Granite_GravelPic,
        title: 'Отсев гранитный и гравийный',
        descriptions: [
          'Во время добычи гранитной породы происходит ее дробление и последующее разделение на фракции. После того, как отделяется самая мелкая фракция 5-10, остается песок, который на профессиональном языке зовется отсевом или крошкой. К этой категории относятся все частицы щебня, имеющие размер до 5 мм. Несмотря на небольшие размеры, отсев обладает всеми качествами полноценного гранита. У него высокая удельная плотность, устойчивость к заморозкам и влаге. Эти качества обуславливают то, что отсев дробленой гранитной породы стал незаменимым материалом в производстве асфальтовых и бетонных смесей, плитки для тротуаров и бордюров.',
          'Гранитная порода имеет разные цветовые варианты, соответственно крошка так же может иметь оттенки от черного до красного, а иногда встречается и зеленый отсев. Это дает возможность создавать плитку соответствующих оттенков и выкладывать дорожки, комбинируя цвета. Именно садовые и парковые дорожки очень удобно отсыпать крошкой.',
        ],
      },
      {
        image: D_LimestonePic,
        title: 'Отсев известняковый',
        descriptions: [
          'Отсев известняковый образуется при производстве известнякового щебня. Он практически не востребован в строительстве, так как состоит из тонких частиц. Известняк гораздо мягче гранита и иных скальных пород. Причем, чем больше в составе искомой породы углекислого кальция, тем она мягче. Твердость известняков зависит от наличия в них углекислого магния. Чем его больше, тем тверже порода, тем меньше пылевидных частиц в отсеве таких известняков. Если в известняке углекислого магния больше 18%, то считается, что это уже доломитовый известняк. Его твердость может доходить до 1000 единиц, в то время как обычный кальциевый известняк имеет твердость от 400 до 800 единиц.',
          'Естественно, что при переработке в щебень более мягкого известняка образуемый отсев практически полностью состоит из известняковой муки, а при переработке доломитового известняка получают отсев в виде тонких фракций, примерно соответствующих по своим характеристикам гранитному отсеву. Однако применение известнякового отсева в тех же направлениях, что и гранитного невозможно в силу слабой водной стойкости известняка.',
          'Поэтому его никогда не используют в качестве антиобледенителя, редко добавляют в растворы и бетоны, особенно, если предполагается воздействие на конструкции из такого бетона воды. Но многие виды цветного известнякового отсева доломитовых известняков после промывания и химической обработки можно использовать в качестве декоративных щебней для оформления дизайна интерьеров и экстерьеров.',
          'Наиболее широкое применение тонкие пылевидные фракции отсева известняка нашли в сельском хозяйстве.',
        ],
      },
    ],
  },
];

export default goodsList;
