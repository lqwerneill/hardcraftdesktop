// Mock Data Configuration & Storage
const seededProducts = [
    {
        id: 1,
        name: 'РЎС‚СѓР» "Р­РєРѕ"',
        category: 'РЎС‚СѓР»СЊСЏ',
        price: 4500,
        lead: 'Р›Р°РєРѕРЅРёС‡РЅС‹Р№ РѕР±РµРґРµРЅРЅС‹Р№ СЃС‚СѓР» РёР· РјР°СЃСЃРёРІР° СЏСЃРµРЅСЏ РґР»СЏ СЃРІРµС‚Р»С‹С… Рё С‚РµРїР»С‹С… РёРЅС‚РµСЂСЊРµСЂРѕРІ.',
        desc: 'РЎС‚СѓР» "Р­РєРѕ" СЃРѕР·РґР°РµС‚СЃСЏ РІСЂСѓС‡РЅСѓСЋ РёР· С‚С‰Р°С‚РµР»СЊРЅРѕ РѕС‚РѕР±СЂР°РЅРЅРѕРіРѕ РјР°СЃСЃРёРІР° СЏСЃРµРЅСЏ. РџР»Р°РІРЅС‹Р№ РёР·РіРёР± СЃРїРёРЅРєРё РїРѕРґРґРµСЂР¶РёРІР°РµС‚ РїРѕСЃР°РґРєСѓ, Р° РЅР°С‚СѓСЂР°Р»СЊРЅРѕРµ РјР°СЃР»Рѕ РїРѕРґС‡РµСЂРєРёРІР°РµС‚ РїСЂРёСЂРѕРґРЅС‹Р№ СЂРёСЃСѓРЅРѕРє РґСЂРµРІРµСЃРёРЅС‹ Рё Р·Р°С‰РёС‰Р°РµС‚ РїРѕРІРµСЂС…РЅРѕСЃС‚СЊ РѕС‚ РїРѕРІСЃРµРґРЅРµРІРЅРѕР№ РЅР°РіСЂСѓР·РєРё. РњРѕРґРµР»СЊ РїРѕРґС…РѕРґРёС‚ РґР»СЏ РєСѓС…РЅРё, СЃС‚РѕР»РѕРІРѕР№ Рё РєР°РјРµСЂРЅС‹С… РєР°С„Рµ.',
        details: ['РњР°СЃСЃРёРІ СЏСЃРµРЅСЏ СЃ СЂСѓС‡РЅРѕР№ С€Р»РёС„РѕРІРєРѕР№', 'Р¤РёРЅРёС€РЅРѕРµ РїРѕРєСЂС‹С‚РёРµ РЅР°С‚СѓСЂР°Р»СЊРЅС‹Рј РјР°СЃР»РѕРј Рё РІРѕСЃРєРѕРј', 'РЈСЃРёР»РµРЅРЅР°СЏ РїРѕСЃР°РґРѕС‡РЅР°СЏ С‡Р°СЃС‚СЊ РґР»СЏ РµР¶РµРґРЅРµРІРЅРѕРіРѕ РёСЃРїРѕР»СЊР·РѕРІР°РЅРёСЏ'],
        specs: { material: 'РЇСЃРµРЅСЊ, РЅР°С‚СѓСЂР°Р»СЊРЅРѕРµ РјР°СЃР»Рѕ', dimensions: '48 x 52 x 84 СЃРј', production: '10-14 РґРЅРµР№' },
        img: 'img/chair.jpg'
    },
    {
        id: 2,
        name: 'РЎС‚РѕР» "Р›РѕС„С‚"',
        category: 'РЎС‚РѕР»С‹',
        price: 15000,
        lead: 'Р’С‹СЂР°Р·РёС‚РµР»СЊРЅС‹Р№ РѕР±РµРґРµРЅРЅС‹Р№ СЃС‚РѕР» СЃ РјР°СЃСЃРёРІРЅРѕР№ СЃС‚РѕР»РµС€РЅРёС†РµР№ Рё Р°СЂС…РёС‚РµРєС‚СѓСЂРЅС‹Рј СЃРёР»СѓСЌС‚РѕРј.',
        desc: 'РЎС‚РѕР» "Р›РѕС„С‚" РѕР±СЉРµРґРёРЅСЏРµС‚ С‚РµРїР»СѓСЋ С„Р°РєС‚СѓСЂСѓ РґРµСЂРµРІР° Рё СЃРѕР±СЂР°РЅРЅСѓСЋ РіРµРѕРјРµС‚СЂРёСЋ СЃРѕРІСЂРµРјРµРЅРЅРѕРіРѕ РёРЅС‚РµСЂСЊРµСЂР°. РўРѕР»СЃС‚Р°СЏ СЃС‚РѕР»РµС€РЅРёС†Р° РёР· РґСѓР±Р° РїСЂРѕС…РѕРґРёС‚ РјРЅРѕРіРѕСЌС‚Р°РїРЅСѓСЋ СЂСѓС‡РЅСѓСЋ РѕР±СЂР°Р±РѕС‚РєСѓ, Р° СѓСЃС‚РѕР№С‡РёРІР°СЏ РѕРїРѕСЂР° СЂР°СЃСЃС‡РёС‚Р°РЅР° РЅР° РґРѕР»РіСѓСЋ СЌРєСЃРїР»СѓР°С‚Р°С†РёСЋ. Р­С‚Рѕ РїСЂРµРґРјРµС‚ РґР»СЏ СЃРµРјРµР№РЅС‹С… СѓР¶РёРЅРѕРІ, СЂР°Р±РѕС‡РёС… РІСЃС‚СЂРµС‡ Рё РїСЂРѕСЃС‚СЂР°РЅСЃС‚РІ, РіРґРµ РјРµР±РµР»СЊ РґРѕР»Р¶РЅР° РїСЂРѕРёР·РІРѕРґРёС‚СЊ РІРїРµС‡Р°С‚Р»РµРЅРёРµ.',
        details: ['РЎС‚РѕР»РµС€РЅРёС†Р° РёР· РґСѓР±Р° СЃ РїСЂРёСЂРѕРґРЅС‹Рј СЂРёСЃСѓРЅРєРѕРј РІРѕР»РѕРєРѕРЅ', 'РќР°РґРµР¶РЅРѕРµ РѕСЃРЅРѕРІР°РЅРёРµ СЃ Р°РЅС‚РёРІРёР±СЂР°С†РёРѕРЅРЅРѕР№ РєРѕРЅСЃС‚СЂСѓРєС†РёРµР№', 'РџРѕРґС…РѕРґРёС‚ РґР»СЏ РєСѓС…РЅРё-РіРѕСЃС‚РёРЅРѕР№ Рё СЃС‚СѓРґРёР№РЅРѕРіРѕ РїСЂРѕСЃС‚СЂР°РЅСЃС‚РІР°'],
        specs: { material: 'Р”СѓР±, РјРµС‚Р°Р»Р», РјР°С‚РѕРІРѕРµ РјР°СЃР»Рѕ', dimensions: '180 x 90 x 76 СЃРј', production: '14-18 РґРЅРµР№' },
        img: 'img/table.jpg'
    },
    {
        id: 3,
        name: 'РўСѓРјР±Р° "РњРёРЅРёРјР°Р»"',
        category: 'РўСѓРјР±С‹',
        price: 8000,
        lead: 'РљРѕРјРїР°РєС‚РЅР°СЏ РїСЂРёРєСЂРѕРІР°С‚РЅР°СЏ С‚СѓРјР±Р° СЃ С‡РёСЃС‚С‹РјРё Р»РёРЅРёСЏРјРё Рё СЃРєСЂС‹С‚С‹Рј С…СЂР°РЅРµРЅРёРµРј.',
        desc: 'РўСѓРјР±Р° "РњРёРЅРёРјР°Р»" СЃРїСЂРѕРµРєС‚РёСЂРѕРІР°РЅР° РґР»СЏ СЃРїРѕРєРѕР№РЅС‹С… СЃРїР°Р»РµРЅ Рё РЅРµР±РѕР»СЊС€РёС… РїСЂРѕСЃС‚СЂР°РЅСЃС‚РІ. Р’С‹РґРІРёР¶РЅРѕР№ СЏС‰РёРє РґРІРёР¶РµС‚СЃСЏ РјСЏРіРєРѕ, Р±РµР· СЂРµР·РєРёС… Р·РІСѓРєРѕРІ, Р° РІРµСЂС…РЅСЏСЏ РїР»РѕСЃРєРѕСЃС‚СЊ СѓРґРѕР±РЅР° РґР»СЏ РєРЅРёРіРё, Р»Р°РјРїС‹ Рё РїРѕРІСЃРµРґРЅРµРІРЅС‹С… РјРµР»РѕС‡РµР№. Р’РЅРµС€РЅРµ РјРѕРґРµР»СЊ РІС‹РіР»СЏРґРёС‚ Р»РµРіРєРѕ, РЅРѕ РїСЂРё СЌС‚РѕРј СЃРѕС…СЂР°РЅСЏРµС‚ РЅР°РґРµР¶РЅРѕСЃС‚СЊ Р·Р° СЃС‡РµС‚ РїР»РѕС‚РЅРѕР№ СЃР±РѕСЂРєРё Рё СѓСЃРёР»РµРЅРЅС‹С… СЃРѕРµРґРёРЅРµРЅРёР№.',
        details: ['РљРѕРјРїР°РєС‚РЅС‹Р№ С„РѕСЂРјР°С‚ РґР»СЏ РЅРµР±РѕР»СЊС€РёС… РєРѕРјРЅР°С‚', 'Р СѓС‡РЅР°СЏ СЃР±РѕСЂРєР° СЃ С‚РѕС‡РЅРѕР№ РїРѕРґРіРѕРЅРєРѕР№ РґРµС‚Р°Р»РµР№', 'РЎРєСЂС‹С‚С‹Р№ СЏС‰РёРє РґР»СЏ С…СЂР°РЅРµРЅРёСЏ Р°РєСЃРµСЃСЃСѓР°СЂРѕРІ Рё РґРѕРєСѓРјРµРЅС‚РѕРІ'],
        specs: { material: 'Р‘РµСЂРµР·Р°, С€РїРѕРЅ РґСѓР±Р°, РјР°СЃР»Рѕ', dimensions: '45 x 38 x 54 СЃРј', production: '7-10 РґРЅРµР№' },
        img: 'img/pedestal.jpg'
    },
    {
        id: 4,
        name: 'РљСЂРµСЃР»Рѕ "РљРѕРјС„РѕСЂС‚"',
        category: 'РљСЂРµСЃР»Р°',
        price: 12000,
        lead: 'РњСЏРіРєРѕРµ РґРёР·Р°Р№РЅРµСЂСЃРєРѕРµ РєСЂРµСЃР»Рѕ РґР»СЏ Р·РѕРЅС‹ РѕС‚РґС‹С…Р°, С‡С‚РµРЅРёСЏ Рё СЃРїРѕРєРѕР№РЅС‹С… РІРµС‡РµСЂРЅРёС… СЂРёС‚СѓР°Р»РѕРІ.',
        desc: 'РљСЂРµСЃР»Рѕ "РљРѕРјС„РѕСЂС‚" СЃРѕР·РґР°РµС‚СЃСЏ РєР°Рє С†РµРЅС‚СЂ СѓСЋС‚РЅРѕР№ РєРѕРјРЅР°С‚С‹. Р“Р»СѓР±РѕРєР°СЏ РїРѕСЃР°РґРєР°, РјСЏРіРєРёР№ РЅР°РїРѕР»РЅРёС‚РµР»СЊ Рё С‚Р°РєС‚РёР»СЊРЅР°СЏ РѕР±РёРІРєР° РїРѕРјРѕРіР°СЋС‚ СЂР°СЃСЃР»Р°Р±РёС‚СЊСЃСЏ, Р° РґСЂРµРІРµСЃРЅС‹Р№ РєР°СЂРєР°СЃ РґРѕР±Р°РІР»СЏРµС‚ РІРёР·СѓР°Р»СЊРЅРѕР№ Р±Р»Р°РіРѕСЂРѕРґРЅРѕСЃС‚Рё. РњРѕРґРµР»СЊ С…РѕСЂРѕС€Рѕ СЃРјРѕС‚СЂРёС‚СЃСЏ СЂСЏРґРѕРј СЃ С‚РѕСЂС€РµСЂРѕРј, Р¶СѓСЂРЅР°Р»СЊРЅС‹Рј СЃС‚РѕР»РёРєРѕРј РёР»Рё РІ Р±РёР±Р»РёРѕС‚РµС‡РЅРѕР№ Р·РѕРЅРµ.',
        details: ['Р­СЂРіРѕРЅРѕРјРёС‡РЅР°СЏ РІС‹СЃРѕРєР°СЏ СЃРїРёРЅРєР° Рё РіР»СѓР±РѕРєРѕРµ СЃРёРґРµРЅСЊРµ', 'РР·РЅРѕСЃРѕСЃС‚РѕР№РєР°СЏ С‚РµРєСЃС‚РёР»СЊРЅР°СЏ РѕР±РёРІРєР° С‚РµРїР»РѕРіРѕ РѕС‚С‚РµРЅРєР°', 'РљР°СЂРєР°СЃ СѓСЃРёР»РµРЅ РґР»СЏ СЃС‚Р°Р±РёР»СЊРЅРѕР№ РµР¶РµРґРЅРµРІРЅРѕР№ СЌРєСЃРїР»СѓР°С‚Р°С†РёРё'],
        specs: { material: 'Р‘СѓРє, РјРµР±РµР»СЊРЅР°СЏ С‚РєР°РЅСЊ, РїРµРЅРѕРїРѕР»РёСѓСЂРµС‚Р°РЅ', dimensions: '78 x 84 x 96 СЃРј', production: '12-16 РґРЅРµР№' },
        img: 'img/armchair.jpg'
    },
    {
        id: 5,
        name: 'Р”РёРІР°РЅ "РЎРєР°РЅРґРё"',
        category: 'Р”РёРІР°РЅС‹',
        price: 32000,
        lead: 'РџСЂСЏРјРѕР№ РґРёРІР°РЅ РґР»СЏ РіРѕСЃС‚РёРЅРѕР№ СЃ РјСЏРіРєРѕР№ РїРѕСЃР°РґРєРѕР№ Рё СЃРїРѕРєРѕР№РЅС‹Рј СЃРµРІРµСЂРЅС‹Рј СЃРёР»СѓСЌС‚РѕРј.',
        desc: 'Р”РёРІР°РЅ "РЎРєР°РЅРґРё" СЂР°СЃСЃС‡РёС‚Р°РЅ РЅР° РµР¶РµРґРЅРµРІРЅС‹Р№ РѕС‚РґС‹С…, РїСЂРёРµРј РіРѕСЃС‚РµР№ Рё РґРѕР»РіСѓСЋ СЃР»СѓР¶Р±Сѓ РІ СЃРµРјРµР№РЅРѕР№ РіРѕСЃС‚РёРЅРѕР№. РџСЂРѕРїРѕСЂС†РёРё РІС‹РІРµСЂРµРЅС‹ С‚Р°Рє, С‡С‚РѕР±С‹ РјРѕРґРµР»СЊ РІС‹РіР»СЏРґРµР»Р° Р»РµРіРєРѕР№, РЅРѕ РїСЂРё СЌС‚РѕРј РґР°РІР°Р»Р° РїРѕР»РЅРѕС†РµРЅРЅСѓСЋ РїРѕРґРґРµСЂР¶РєСѓ СЃРїРёРЅРµ Рё РїР»РµС‡Р°Рј.',
        details: ['РР·РЅРѕСЃРѕСЃС‚РѕР№РєР°СЏ РјРµР±РµР»СЊРЅР°СЏ С‚РєР°РЅСЊ', 'РќР°РїРѕР»РЅРёС‚РµР»СЊ РїРѕРІС‹С€РµРЅРЅРѕР№ СѓРїСЂСѓРіРѕСЃС‚Рё', 'РЎСЉРµРјРЅС‹Рµ РїРѕРґСѓС€РєРё РґР»СЏ СѓРґРѕР±РЅРѕРіРѕ СѓС…РѕРґР°'],
        specs: { material: 'Р‘СЂСѓСЃ, С‚РєР°РЅСЊ, РїРµРЅРѕРїРѕР»РёСѓСЂРµС‚Р°РЅ', dimensions: '220 x 96 x 88 СЃРј', production: '18-24 РґРЅРµР№' },
        img: 'img/sofa.jpg'
    },
    {
        id: 6,
        name: 'РљРѕРјРѕРґ "Р›РёРЅРёСЏ"',
        category: 'РҐСЂР°РЅРµРЅРёРµ',
        price: 18500,
        lead: 'Р’РµСЂС‚РёРєР°Р»СЊРЅС‹Р№ РєРѕРјРѕРґ СЃ РІС‹СЂР°Р·РёС‚РµР»СЊРЅС‹Рј СЂРёСЃСѓРЅРєРѕРј С„Р°СЃР°РґРѕРІ Рё РІРјРµСЃС‚РёС‚РµР»СЊРЅС‹РјРё СЏС‰РёРєР°РјРё.',
        desc: 'РљРѕРјРѕРґ "Р›РёРЅРёСЏ" РїРѕРјРѕРіР°РµС‚ РѕСЂРіР°РЅРёР·РѕРІР°С‚СЊ С…СЂР°РЅРµРЅРёРµ РІ СЃРїР°Р»СЊРЅРµ, РїСЂРёС…РѕР¶РµР№ РёР»Рё РіРѕСЃС‚РёРЅРѕР№. РћРЅ СЃРѕС‡РµС‚Р°РµС‚ РєРѕРјРїР°РєС‚РЅС‹Р№ СЃР»РµРґ РЅР° РїРѕР»Сѓ СЃ С…РѕСЂРѕС€РёРј РїРѕР»РµР·РЅС‹Рј РѕР±СЉРµРјРѕРј, СЃРѕС…СЂР°РЅСЏСЏ С‡РёСЃС‚С‹Р№ Рё Р°СЂС…РёС‚РµРєС‚СѓСЂРЅС‹Р№ РІРёРґ.',
        details: ['Р§РµС‚С‹СЂРµ РіР»СѓР±РѕРєРёС… СЏС‰РёРєР°', 'РњСЏРіРєРѕРµ Р·Р°РєСЂС‹РІР°РЅРёРµ РЅР°РїСЂР°РІР»СЏСЋС‰РёС…', 'РџРѕРґС…РѕРґРёС‚ РґР»СЏ СЃРїР°Р»СЊРЅРё Рё РїСЂРёС…РѕР¶РµР№'],
        specs: { material: 'РњР”Р¤, С€РїРѕРЅ РґСѓР±Р°, СЌРјР°Р»СЊ', dimensions: '90 x 45 x 110 СЃРј', production: '14-18 РґРЅРµР№' },
        img: 'img/chest.jpg'
    },
    {
        id: 7,
        name: 'РЎС‚РµР»Р»Р°Р¶ "РњРѕРґСѓР»СЊ"',
        category: 'РҐСЂР°РЅРµРЅРёРµ',
        price: 21000,
        lead: 'РћС‚РєСЂС‹С‚С‹Р№ СЃС‚РµР»Р»Р°Р¶ РґР»СЏ РєРЅРёРі, РґРµРєРѕСЂР° Рё СЃРїРѕРєРѕР№РЅРѕР№ РѕСЂРіР°РЅРёР·Р°С†РёРё РїСЂРѕСЃС‚СЂР°РЅСЃС‚РІР°.',
        desc: 'РЎС‚РµР»Р»Р°Р¶ "РњРѕРґСѓР»СЊ" СЃРѕР±РёСЂР°РµС‚СЃСЏ РёР· РєСЂРµРїРєРёС… СЃРµРєС†РёР№ Рё С…РѕСЂРѕС€Рѕ СЃРјРѕС‚СЂРёС‚СЃСЏ РєР°Рє Сѓ СЃС‚РµРЅС‹, С‚Р°Рє Рё РІ СЂРѕР»Рё Р»РµРіРєРѕР№ РїРµСЂРµРіРѕСЂРѕРґРєРё. Р•РіРѕ РґРёР·Р°Р№РЅ РЅРµ РїРµСЂРµРіСЂСѓР¶Р°РµС‚ РёРЅС‚РµСЂСЊРµСЂ Рё РїРѕР·РІРѕР»СЏРµС‚ СЃРІРѕР±РѕРґРЅРѕ РјРµРЅСЏС‚СЊ СЃС†РµРЅР°СЂРёРё С…СЂР°РЅРµРЅРёСЏ.',
        details: ['РЈСЃС‚РѕР№С‡РёРІС‹Р№ РєР°СЂРєР°СЃ СЃ СѓСЃРёР»РµРЅРЅС‹РјРё РїРѕР»РєР°РјРё', 'РџРѕРґС…РѕРґРёС‚ РґР»СЏ РєРЅРёРі Рё РїСЂРµРґРјРµС‚РѕРІ РґРµРєРѕСЂР°', 'РњРѕР¶РЅРѕ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РґР»СЏ Р·РѕРЅРёСЂРѕРІР°РЅРёСЏ'],
        specs: { material: 'РњРµС‚Р°Р»Р», РґСѓР±РѕРІС‹Р№ С€РїРѕРЅ', dimensions: '120 x 36 x 200 СЃРј', production: '12-16 РґРЅРµР№' },
        img: 'img/shelf.jpg'
    },
    {
        id: 8,
        name: 'РљРѕРЅСЃРѕР»СЊ "Р“Р°Р»РµСЂРµСЏ"',
        category: 'РљРѕРЅСЃРѕР»Рё',
        price: 12800,
        lead: 'РЈР·РєР°СЏ РєРѕРЅСЃРѕР»СЊ РґР»СЏ РїСЂРёС…РѕР¶РµР№ Рё РіРѕСЃС‚РёРЅРѕР№ СЃ Р°РєРєСѓСЂР°С‚РЅС‹Рј РіСЂР°С„РёС‡РЅС‹Рј РїСЂРѕС„РёР»РµРј.',
        desc: 'РљРѕРЅСЃРѕР»СЊ "Р“Р°Р»РµСЂРµСЏ" РїРѕРјРѕРіР°РµС‚ РѕС„РѕСЂРјРёС‚СЊ РІС…РѕРґРЅСѓСЋ Р·РѕРЅСѓ, СЃС‚РµРЅСѓ РІ РіРѕСЃС‚РёРЅРѕР№ РёР»Рё РїСЂРѕСЃС‚СЂР°РЅСЃС‚РІРѕ РїРѕРґ Р·РµСЂРєР°Р»РѕРј. РќРµР±РѕР»СЊС€Р°СЏ РіР»СѓР±РёРЅР° РґРµР»Р°РµС‚ РµРµ СѓРґРѕР±РЅРѕР№ РґР°Р¶Рµ РІ РєРѕРјРїР°РєС‚РЅС‹С… РєРІР°СЂС‚РёСЂР°С….',
        details: ['РљРѕРјРїР°РєС‚РЅР°СЏ РіР»СѓР±РёРЅР° РґР»СЏ РЅРµР±РѕР»СЊС€РёС… Р·РѕРЅ', 'РџРѕРґС…РѕРґРёС‚ РґР»СЏ РґРµРєРѕСЂР° Рё РµР¶РµРґРЅРµРІРЅС‹С… РјРµР»РѕС‡РµР№', 'РЎР±Р°Р»Р°РЅСЃРёСЂРѕРІР°РЅРЅР°СЏ РіРµРѕРјРµС‚СЂРёСЏ Р±РµР· РїРµСЂРµРіСЂСѓР·Р°'],
        specs: { material: 'Р”СѓР±, СЃС‚Р°Р»СЊ, РјР°СЃР»Рѕ', dimensions: '110 x 32 x 82 СЃРј', production: '10-12 РґРЅРµР№' },
        img: 'img/console.jpg'
    },
    {
        id: 9,
        name: 'РљСЂРѕРІР°С‚СЊ "РўРёС…РёР№ РґРѕРј"',
        category: 'РљСЂРѕРІР°С‚Рё',
        price: 41000,
        lead: 'РљСЂРѕРІР°С‚СЊ СЃ РІС‹СЃРѕРєРёРј РјСЏРіРєРёРј РёР·РіРѕР»РѕРІСЊРµРј РґР»СЏ СЃРїРѕРєРѕР№РЅРѕР№ СЃРїР°Р»СЊРЅРё Рё РјСЏРіРєРѕРіРѕ СЃРІРµС‚Р°.',
        desc: 'РљСЂРѕРІР°С‚СЊ "РўРёС…РёР№ РґРѕРј" СЃРѕР·РґР°РµС‚СЃСЏ СЃ Р°РєС†РµРЅС‚РѕРј РЅР° РєРѕРјС„РѕСЂС‚РЅС‹Р№ СЃРѕРЅ Рё РІРёР·СѓР°Р»СЊРЅСѓСЋ РјСЏРіРєРѕСЃС‚СЊ РёРЅС‚РµСЂСЊРµСЂР°. РЈСЃС‚РѕР№С‡РёРІРѕРµ РѕСЃРЅРѕРІР°РЅРёРµ Рё РїСЂРѕРґСѓРјР°РЅРЅР°СЏ РІС‹СЃРѕС‚Р° РґРµР»Р°СЋС‚ РµРµ СѓРґРѕР±РЅРѕР№ РґР»СЏ РµР¶РµРґРЅРµРІРЅРѕРіРѕ РёСЃРїРѕР»СЊР·РѕРІР°РЅРёСЏ.',
        details: ['Р’С‹СЃРѕРєРѕРµ РјСЏРіРєРѕРµ РёР·РіРѕР»РѕРІСЊРµ', 'РќР°РґРµР¶РЅРѕРµ РѕСЃРЅРѕРІР°РЅРёРµ РїРѕРґ РјР°С‚СЂР°СЃ', 'Р›Р°РєРѕРЅРёС‡РЅС‹Р№ СЃРёР»СѓСЌС‚ РґР»СЏ СЃРѕРІСЂРµРјРµРЅРЅС‹С… СЃРїР°Р»РµРЅ'],
        specs: { material: 'Р‘СѓРє, С‚РєР°РЅСЊ, Р»Р°РјРµР»Рё', dimensions: '212 x 172 x 110 СЃРј', production: '16-22 РґРЅРµР№' },
        img: 'img/bed.jpg'
    },
    {
        id: 10,
        name: 'РўРѕСЂС€РµСЂ "РќРѕСЂРґ"',
        category: 'РћСЃРІРµС‰РµРЅРёРµ',
        price: 9600,
        lead: 'РќР°РїРѕР»СЊРЅС‹Р№ СЃРІРµС‚РёР»СЊРЅРёРє РґР»СЏ СѓСЋС‚РЅРѕРіРѕ С‡С‚РµРЅРёСЏ Рё РјСЏРіРєРѕР№ РІРµС‡РµСЂРЅРµР№ Р°С‚РјРѕСЃС„РµСЂС‹.',
        desc: 'РўРѕСЂС€РµСЂ "РќРѕСЂРґ" РґРѕРїРѕР»РЅСЏРµС‚ РєСЂРµСЃР»Рѕ, РґРёРІР°РЅРЅСѓСЋ РіСЂСѓРїРїСѓ РёР»Рё СЃРїР°Р»СЊРЅСЋ СЃРїРѕРєРѕР№РЅС‹Рј СЂР°СЃСЃРµСЏРЅРЅС‹Рј СЃРІРµС‚РѕРј. РћРЅ СЃС‚Р°РЅРѕРІРёС‚СЃСЏ С„СѓРЅРєС†РёРѕРЅР°Р»СЊРЅС‹Рј Р°РєС†РµРЅС‚РѕРј Рё РїРѕРјРѕРіР°РµС‚ СЃРґРµР»Р°С‚СЊ РёРЅС‚РµСЂСЊРµСЂ Р·Р°РІРµСЂС€РµРЅРЅС‹Рј.',
        details: ['РњСЏРіРєРёР№ СЃРІРµС‚ РґР»СЏ Р·РѕРЅС‹ РѕС‚РґС‹С…Р°', 'РЈСЃС‚РѕР№С‡РёРІРѕРµ РѕСЃРЅРѕРІР°РЅРёРµ', 'РџРѕРґС…РѕРґРёС‚ РґР»СЏ СЃРїР°Р»СЊРЅРё Рё РіРѕСЃС‚РёРЅРѕР№'],
        specs: { material: 'РњРµС‚Р°Р»Р», С‚РµРєСЃС‚РёР»СЊ, РґРµСЂРµРІРѕ', dimensions: '45 x 45 x 162 СЃРј', production: '5-7 РґРЅРµР№' },
        img: 'img/floorlamp.jpg'
    }
];

const isAssetsPage = window.location.pathname.includes('/assets/');

const pageUrl = page => {
    if (page === 'index.html') {
        return isAssetsPage ? '../index.html' : './index.html';
    }

    return isAssetsPage ? `./${page}` : `./assets/${page}`;
};

const assetUrl = path => {
    if (!path) {
        return '';
    }

    if (/^(https?:|data:|blob:|#)/i.test(path)) {
        return path;
    }

    const normalizedPath = String(path)
        .replace(/\\/g, '/')
        .replace(/^\.\//, '')
        .replace(/^\.\.\//, '')
        .replace(/^images\//, 'img/');

    return isAssetsPage ? `./${normalizedPath}` : `./assets/${normalizedPath}`;
};

const windows1251Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('windows-1251') : null;
const utf8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8') : null;

const cp1251EncodeMap = (() => {
    const map = new Map();
    if (!windows1251Decoder) return map;

    for (let i = 0; i < 256; i += 1) {
        map.set(windows1251Decoder.decode(new Uint8Array([i])), i);
    }

    return map;
})();

const encodeCp1251 = value => {
    const bytes = [];
    for (const ch of String(value)) {
        const code = cp1251EncodeMap.get(ch);
        if (typeof code === 'undefined') {
            return null;
        }
        bytes.push(code);
    }
    return new Uint8Array(bytes);
};

const decodeMojibakeText = value => {
    const text = String(value ?? '');
    if (!text || !utf8Decoder || cp1251EncodeMap.size === 0) {
        return text;
    }

    const encoded = encodeCp1251(text);
    if (!encoded) return text;

    const decoded = utf8Decoder.decode(encoded);
    if (!decoded || decoded.includes('�')) return text;

    if (decoded === text) {
        return text;
    }

    return decoded;
};

const normalizeMojibakeData = value => {
    if (typeof value === 'string') return decodeMojibakeText(value);
    if (Array.isArray(value)) return value.map(item => normalizeMojibakeData(item));
    if (!value || typeof value !== 'object') return value;

    const normalized = {};
    Object.entries(value).forEach(([key, entry]) => {
        normalized[key] = normalizeMojibakeData(entry);
    });
    return normalized;
};

const mergeSeededProducts = existingProducts => {
    const seededCatalog = normalizeMojibakeData(seededProducts);

    if (!Array.isArray(existingProducts) || existingProducts.length === 0) {
        return seededCatalog;
    }

    const mergedSeeded = seededCatalog.map(seeded => {
        const existing = existingProducts.find(product => product.id === seeded.id);
        if (!existing) {
            return seeded;
        }

        return {
            ...seeded,
            ...existing,
            img: seeded.img,
            category: existing.category || seeded.category,
            lead: existing.lead || seeded.lead,
            desc: existing.desc || seeded.desc,
            details: Array.isArray(existing.details) && existing.details.length ? existing.details : seeded.details,
            specs: existing.specs || seeded.specs
        };
    });

    const customProducts = existingProducts.filter(product => !seededCatalog.some(seeded => seeded.id === product.id));
    return [...mergedSeeded, ...customProducts];
};

const normalizeStoredOrders = (orders, users = []) => {
    if (!Array.isArray(orders)) {
        return [];
    }

    return orders.map(order => {
        const matchedUser = users.find(user => user.id === order?.userId);
        const items = Array.isArray(order?.items) ? order.items : [];
        const calculatedTotal = items.reduce((sum, item) => sum + ((Number(item?.price) || 0) * (Number(item?.qty) || 0)), 0);

        return {
            ...order,
            id: order?.id || Date.now() + Math.floor(Math.random() * 1000),
            userName: order?.userName || matchedUser?.name || 'Клиент не указан',
            items,
            total: Number(order?.total) || calculatedTotal,
            status: order?.status || 'Новый'
        };
    });
};

const initData = () => {
    const storedProducts = normalizeMojibakeData(JSON.parse(localStorage.getItem('products')));
    localStorage.setItem('products', JSON.stringify(mergeSeededProducts(storedProducts)));

    const defaultUsers = [
            { id: 1, login: 'admin', password: '123', role: 'admin', name: 'Администратор' },
            { id: 2, login: 'test', password: '123', role: 'user', name: 'Тестовый покупатель' }
        ];

    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify(defaultUsers));
    }

    if (!localStorage.getItem('reviews')) {
        localStorage.setItem('reviews', JSON.stringify([
            { id: 1, name: 'Иван', text: 'Отличное качество!', rating: 5 }
        ]));
    }

    const storedUsers = normalizeMojibakeData(JSON.parse(localStorage.getItem('users'))) || defaultUsers;
    const storedOrders = normalizeMojibakeData(JSON.parse(localStorage.getItem('orders')));
    localStorage.setItem('orders', JSON.stringify(normalizeStoredOrders(storedOrders, storedUsers)));

    if (!localStorage.getItem('favorites')) {
        localStorage.setItem('favorites', JSON.stringify([]));
    }
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
};

// Global State access
const getStr = key => normalizeMojibakeData(JSON.parse(localStorage.getItem(key))) || [];
const setStr = (key, val) => localStorage.setItem(key, JSON.stringify(normalizeMojibakeData(val)));
let currentUser = normalizeMojibakeData(JSON.parse(localStorage.getItem('currentUser')));

const escapeHtml = value => String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const normalizeText = value => String(value ?? '')
    .toLowerCase()
    .replace(/"/g, '')
    .replace(/ё/g, 'е')
    .trim();

const getFallbackImageByCategory = category => {
    const normalizedCategory = normalizeText(category);

    if (normalizedCategory.includes('стул')) return 'img/chair.jpg';
    if (normalizedCategory.includes('стол')) return 'img/table.jpg';
    if (normalizedCategory.includes('тумб')) return 'img/pedestal.jpg';
    if (normalizedCategory.includes('кресл')) return 'img/armchair.jpg';
    if (normalizedCategory.includes('диван')) return 'img/sofa.jpg';
    if (normalizedCategory.includes('кроват')) return 'img/bed.jpg';
    if (normalizedCategory.includes('консол')) return 'img/console.jpg';
    if (normalizedCategory.includes('освещ') || normalizedCategory.includes('торшер') || normalizedCategory.includes('свет')) return 'img/floorlamp.jpg';
    if (normalizedCategory.includes('хранен')) return 'img/chest.jpg';

    return 'img/chair.jpg';
};

const getFallbackImageByName = name => {
    const normalizedName = normalizeText(name);

    const knownModels = [
        { match: ['стул', 'эко'], img: 'img/chair.jpg' },
        { match: ['стол', 'лофт'], img: 'img/table.jpg' },
        { match: ['тумба', 'минимал'], img: 'img/pedestal.jpg' },
        { match: ['кресло', 'комфорт'], img: 'img/armchair.jpg' },
        { match: ['диван', 'сканди'], img: 'img/sofa.jpg' },
        { match: ['комод', 'линия'], img: 'img/chest.jpg' },
        { match: ['стеллаж', 'модуль'], img: 'img/shelf.jpg' },
        { match: ['консоль', 'галерея'], img: 'img/console.jpg' },
        { match: ['кровать', 'тихий дом'], img: 'img/bed.jpg' },
        { match: ['торшер', 'норд'], img: 'img/floorlamp.jpg' }
    ];

    const exactModel = knownModels.find(model => model.match.every(part => normalizedName.includes(part)));
    if (exactModel) {
        return exactModel.img;
    }

    if (normalizedName.includes('стул')) return 'img/chair.jpg';
    if (normalizedName.includes('стол')) return 'img/table.jpg';
    if (normalizedName.includes('тумб')) return 'img/pedestal.jpg';
    if (normalizedName.includes('кресл')) return 'img/armchair.jpg';
    if (normalizedName.includes('диван')) return 'img/sofa.jpg';
    if (normalizedName.includes('кровать')) return 'img/bed.jpg';
    if (normalizedName.includes('стеллаж')) return 'img/shelf.jpg';
    if (normalizedName.includes('комод')) return 'img/chest.jpg';
    if (normalizedName.includes('консол')) return 'img/console.jpg';
    if (normalizedName.includes('торшер') || normalizedName.includes('свет')) return 'img/floorlamp.jpg';

    return '';
};

const resolveProductImage = (item, products = []) => {
    const normalizedName = normalizeText(item?.name);
    const normalizedCategory = normalizeText(item?.category);

    const matchedProduct = products.find(product => product.id === item?.id)
        || products.find(product => normalizeText(product.name) === normalizedName)
        || products.find(product => normalizedName && (normalizedName.includes(normalizeText(product.name)) || normalizeText(product.name).includes(normalizedName)))
        || products.find(product => normalizeText(product.category) === normalizedCategory);

    if (matchedProduct?.img) {
        return matchedProduct.img;
    }

    if (item?.img) {
        return item.img;
    }

    const imageByName = getFallbackImageByName(item?.name);
    if (imageByName) {
        return imageByName;
    }

    return getFallbackImageByCategory(item?.category);
};

const normalizeDomText = root => {
    if (!root || typeof document === 'undefined') return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
        const current = walker.currentNode;
        const fixed = decodeMojibakeText(current.nodeValue);
        if (fixed !== current.nodeValue) {
            current.nodeValue = fixed;
        }
    }

    root.querySelectorAll('*').forEach(element => {
        ['title', 'placeholder', 'aria-label', 'value', 'alt'].forEach(attr => {
            const raw = element.getAttribute(attr);
            if (!raw) return;

            const fixed = decodeMojibakeText(raw);
            if (fixed !== raw) {
                element.setAttribute(attr, fixed);
            }
        });
    });
};

const setupMojibakeObserver = () => {
    if (!document.body || typeof MutationObserver === 'undefined') return;

    normalizeDomText(document.body);
    const observer = new MutationObserver(() => normalizeDomText(document.body));
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
};

const loadExternalScript = src => new Promise((resolve, reject) => {
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript) {
        if (existingScript.dataset.loaded === 'true') {
            resolve();
            return;
        }

        existingScript.addEventListener('load', () => resolve(), { once: true });
        existingScript.addEventListener('error', () => reject(new Error(`РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ СЃРєСЂРёРїС‚: ${src}`)), { once: true });
        return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.addEventListener('load', () => {
        script.dataset.loaded = 'true';
        resolve();
    }, { once: true });
    script.addEventListener('error', () => reject(new Error(`РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ СЃРєСЂРёРїС‚: ${src}`)), { once: true });
    document.body.appendChild(script);
});

const ensureSiteDialog = () => {
    let dialog = document.getElementById('site-dialog');
    if (dialog) {
        return dialog;
    }

    dialog = document.createElement('div');
    dialog.id = 'site-dialog';
    dialog.className = 'site-dialog';
    dialog.innerHTML = `
        <div class="site-dialog__backdrop"></div>
        <div class="site-dialog__panel" role="dialog" aria-modal="true" aria-labelledby="site-dialog-title" aria-describedby="site-dialog-message">
            <span class="site-dialog__eyebrow">HandCraft</span>
            <h3 class="site-dialog__title" id="site-dialog-title">РџРѕРґС‚РІРµСЂРґРёС‚Рµ РґРµР№СЃС‚РІРёРµ</h3>
            <p class="site-dialog__message" id="site-dialog-message"></p>
            <div class="site-dialog__actions"></div>
        </div>
    `;

    document.body.appendChild(dialog);
    return dialog;
};

const closeSiteDialog = dialog => {
    dialog.classList.remove('is-visible');
    syncDialogOpenState();
};

const syncDialogOpenState = () => {
    const hasVisibleOverlay = document.querySelector('.site-dialog.is-visible, .admin-modal.is-visible');
    document.body.classList.toggle('dialog-open', Boolean(hasVisibleOverlay));
};

const showSiteDialog = ({ title = 'Подтвердите действие', message = '', confirmText = 'OK', cancelText = '', tone = 'default' } = {}) => new Promise(resolve => {
    const dialog = ensureSiteDialog();
    const titleEl = dialog.querySelector('.site-dialog__title');
    const messageEl = dialog.querySelector('.site-dialog__message');
    const actionsEl = dialog.querySelector('.site-dialog__actions');
    const panel = dialog.querySelector('.site-dialog__panel');

    titleEl.textContent = decodeMojibakeText(String(title ?? ''));
    messageEl.textContent = decodeMojibakeText(String(message ?? ''));
    actionsEl.innerHTML = '';
    panel.dataset.tone = tone;

    const cleanup = value => {
        closeSiteDialog(dialog);
        document.removeEventListener('keydown', handleKeydown);
        resolve(value);
    };

    const confirmButton = document.createElement('button');
    confirmButton.type = 'button';
    confirmButton.className = 'btn site-dialog__button';
    confirmButton.textContent = decodeMojibakeText(String(confirmText ?? 'OK'));
    confirmButton.addEventListener('click', () => cleanup(true));
    actionsEl.appendChild(confirmButton);

    if (cancelText) {
        const cancelButton = document.createElement('button');
        cancelButton.type = 'button';
        cancelButton.className = 'btn btn-secondary site-dialog__button';
        cancelButton.textContent = decodeMojibakeText(String(cancelText ?? ''));
        cancelButton.addEventListener('click', () => cleanup(false));
        actionsEl.appendChild(cancelButton);
    }

    const handleKeydown = event => {
        if (event.key === 'Escape') {
            cleanup(false);
        }
        if (event.key === 'Enter') {
            cleanup(true);
        }
    };

    dialog.querySelector('.site-dialog__backdrop').onclick = () => cleanup(false);
    document.addEventListener('keydown', handleKeydown);
    dialog.classList.add('is-visible');
    syncDialogOpenState();
    confirmButton.focus();
});

window.showSiteDialog = showSiteDialog;
window.alert = message => showSiteDialog({ message: String(message ?? '') });
window.confirm = message => showSiteDialog({ message: String(message ?? ''), confirmText: 'Подтвердить', cancelText: 'Отмена' });

const renderFooter = () => {
    if (document.querySelector('.site-footer')) return;

    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = `
        <div class="footer-shell">
            <div class="footer-brand">
                <span class="footer-kicker">HandCraft Furniture</span>
                <h3>Авторская мебель для интерьеров, где хочется жить медленнее.</h3>
                <p>Проектируем и изготавливаем мебель вручную: от столов и кресел до компактных тумб и акцентных предметов.</p>
            </div>
            <div class="footer-column">
                <h4>Навигация</h4>
                <a href="${pageUrl('index.html')}">Главная</a>
                <a href="${pageUrl('catalog.html')}">Каталог</a>
                <a href="${pageUrl('reviews.html')}">Отзывы</a>
                <a href="${pageUrl('cart.html')}">Корзина</a>
            </div>
            <div class="footer-column">
                <h4>Контакты</h4>
                <p>Казань, студия ручной мебели</p>
                <a href="tel:+74951234567">+7 (495) 123-45-67</a>
                <a href="mailto:hello@handcraft.local">hello@handcraft.local</a>
            </div>
            <div class="footer-column">
                <h4>Почему мы</h4>
                <p>Натуральные материалы</p>
                <p>Малые тиражи</p>
                <p>Индивидуальная отделка</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© 2026 HandCraft Furniture. Ручная работа, честные материалы, спокойный дизайн.</p>
        </div>
    `;

    document.body.appendChild(footer);
};

// Helper: Check Auth for Cart
const requireAuth = (redirectUrl = pageUrl('login.html')) => {
    if (!currentUser) {
        showSiteDialog({ message: 'Пожалуйста, войдите в аккаунт.' }).then(() => {
            window.location.href = redirectUrl;
        });
        return false;
    }
    return true;
};

// UI: Navigation & Burger
const setupNav = () => {
    const nav = document.getElementById('nav-links');
    const burger = document.getElementById('burger');
    if (!nav || !burger) return;

    const setMenuState = isOpen => {
        nav.classList.toggle('active', isOpen);
        burger.classList.toggle('active', isOpen);
        burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    };

    burger.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        setMenuState(!nav.classList.contains('active'));
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            setMenuState(false);
            nav.querySelectorAll('.nav-dropdown').forEach(dropdown => dropdown.classList.remove('open'));
        });
    });

    const dropdowns = nav.querySelectorAll('.nav-dropdown');
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.nav-dropdown-toggle');
        if (!toggle) return;

        toggle.addEventListener('click', event => {
            event.stopPropagation();
            const willOpen = !dropdown.classList.contains('open');

            dropdowns.forEach(item => {
                item.classList.remove('open');
                const button = item.querySelector('.nav-dropdown-toggle');
                if (button) button.setAttribute('aria-expanded', 'false');
            });

            dropdown.classList.toggle('open', willOpen);
            toggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        });
    });

    document.addEventListener('click', event => {
        if (event.target.closest('#burger')) return;

        if (!event.target.closest('nav')) {
            setMenuState(false);
        }

        if (event.target.closest('.nav-dropdown')) return;

        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('open');
            const toggle = dropdown.querySelector('.nav-dropdown-toggle');
            if (toggle) toggle.setAttribute('aria-expanded', 'false');
        });
    });
};

const setupThemeToggle = () => {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    const updateThemeIcon = () => {
        themeToggle.textContent = document.body.classList.contains('dark-theme') ? '\u2600' : '\uD83C\uDF19';
    };

    updateThemeIcon();
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
        updateThemeIcon();
    });
};

const setupAboutTabs = () => {
    const tabsRoot = document.getElementById('about-tabs');
    if (!tabsRoot) return;

    const buttons = tabsRoot.querySelectorAll('.about-tab-btn');
    const panels = tabsRoot.querySelectorAll('.about-tab-panel');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const key = button.dataset.tab;

            buttons.forEach(btn => {
                const isActive = btn === button;
                btn.classList.toggle('active', isActive);
                btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
            });

            panels.forEach(panel => {
                panel.classList.toggle('active', panel.dataset.panel === key);
            });
        });
    });
};

const setupAccordion = () => {
    const accordion = document.getElementById('faq-accordion');
    if (!accordion) return;

    accordion.querySelectorAll('.accordion-trigger').forEach(trigger => {
        trigger.addEventListener('click', () => {
            const item = trigger.closest('.accordion-item');
            if (!item) return;

            accordion.querySelectorAll('.accordion-item').forEach(entry => {
                if (entry !== item) {
                    entry.classList.remove('active');
                }
            });

            item.classList.toggle('active');
        });
    });
};

const setupFurnitureOrderForm = () => {
    const orderForm = document.getElementById('furniture-order-form');
    if (!orderForm) return;

    orderForm.addEventListener('submit', event => {
        event.preventDefault();

        const formData = new FormData(orderForm);
        const name = String(formData.get('name') || '').trim();
        const phone = String(formData.get('phone') || '').trim();
        const address = String(formData.get('address') || '').trim();
        const item = String(formData.get('item') || '').trim();
        const comment = String(formData.get('comment') || '').trim();

        if (!name || !phone || !item) {
            showSiteDialog({ title: 'РџСЂРѕРІРµСЂСЊС‚Рµ С„РѕСЂРјСѓ', message: 'Р—Р°РїРѕР»РЅРёС‚Рµ РёРјСЏ, С‚РµР»РµС„РѕРЅ Рё С‚РёРї РјРµР±РµР»Рё.' });
            return;
        }

        const requests = getStr('furnitureRequests');
        requests.push({
            id: Date.now(),
            name,
            phone,
            address,
            item,
            comment,
            createdAt: new Date().toISOString()
        });
        setStr('furnitureRequests', requests);
        orderForm.reset();
        showSiteDialog({ title: 'Р—Р°СЏРІРєР° РѕС‚РїСЂР°РІР»РµРЅР°', message: 'РЎРїР°СЃРёР±Рѕ! РњС‹ СЃРІСЏР¶РµРјСЃСЏ СЃ РІР°РјРё РґР»СЏ СѓС‚РѕС‡РЅРµРЅРёСЏ РґРµС‚Р°Р»РµР№ Р·Р°РєР°Р·Р°.' });
    });
};

// UI: Slider (Index)
const setupSlider = () => {
    const slidesContainer = document.querySelector('.slides');
    if (!slidesContainer) return;

    const slides = Array.from(document.querySelectorAll('.slide'));
    let currentIndex = 0;
    const slidesCount = slides.length;

    const syncActiveSlideMedia = () => {
        slides.forEach((slide, index) => {
            const video = slide.querySelector('video');
            if (!video) return;

            if (index === currentIndex) {
                video.currentTime = 0;
                const playPromise = video.play();
                if (playPromise && typeof playPromise.catch === 'function') {
                    playPromise.catch(() => {});
                }
            } else {
                video.pause();
                video.currentTime = 0;
            }
        });
    };

    const moveSlider = (dir) => {
        currentIndex = (currentIndex + dir + slidesCount) % slidesCount;
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        syncActiveSlideMedia();
    };

    document.querySelector('.prev')?.addEventListener('click', () => moveSlider(-1));
    document.querySelector('.next')?.addEventListener('click', () => moveSlider(1));

    slides.forEach(slide => {
        const video = slide.querySelector('video');
        if (!video) return;

        video.addEventListener('ended', () => {
            if (slides[currentIndex] === slide) {
                moveSlider(1);
            }
        });
    });

    syncActiveSlideMedia();
};

// Render: Catalog
const renderCatalog = () => {
    const grid = document.getElementById('catalog-grid');
    const featuredGrid = document.getElementById('featured-catalog-grid');
    const categoriesContainer = document.getElementById('catalog-categories');
    const searchInput = document.getElementById('catalog-search');
    const sortSelect = document.getElementById('catalog-sort');
    const products = getStr('products');
    const categories = ['Р’СЃРµ', ...new Set(products.map(product => product.category || 'Р”СЂСѓРіРѕРµ'))];
    const selectedCategory = categoriesContainer?.dataset.activeCategory || 'Р’СЃРµ';
    const searchQuery = (searchInput?.value || '').trim().toLowerCase();
    const sortMode = sortSelect?.value || 'default';

    let filteredProducts = selectedCategory === 'Р’СЃРµ'
        ? products
        : products.filter(product => (product.category || 'Р”СЂСѓРіРѕРµ') === selectedCategory);

    if (searchQuery) {
        filteredProducts = filteredProducts.filter(product => {
            const inName = String(product.name || '').toLowerCase().includes(searchQuery);
            const inLead = String(product.lead || '').toLowerCase().includes(searchQuery);
            const inCategory = String(product.category || '').toLowerCase().includes(searchQuery);
            return inName || inLead || inCategory;
        });
    }

    if (sortMode === 'price-asc') {
        filteredProducts = [...filteredProducts].sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortMode === 'price-desc') {
        filteredProducts = [...filteredProducts].sort((a, b) => Number(b.price) - Number(a.price));
    } else if (sortMode === 'name-asc') {
        filteredProducts = [...filteredProducts].sort((a, b) => String(a.name).localeCompare(String(b.name), 'ru'));
    } else if (sortMode === 'name-desc') {
        filteredProducts = [...filteredProducts].sort((a, b) => String(b.name).localeCompare(String(a.name), 'ru'));
    }

    if (categoriesContainer) {
        categoriesContainer.innerHTML = categories.map(category => `
            <button class="category-pill ${category === selectedCategory ? 'active' : ''}" data-category="${category}">${category}</button>
        `).join('');

        categoriesContainer.querySelectorAll('.category-pill').forEach(button => {
            button.addEventListener('click', () => {
                categoriesContainer.dataset.activeCategory = button.dataset.category;
                renderCatalog();
            });
        });
    }

    if (searchInput && !searchInput.dataset.bound) {
        searchInput.addEventListener('input', renderCatalog);
        searchInput.dataset.bound = 'true';
    }

    if (sortSelect && !sortSelect.dataset.bound) {
        sortSelect.addEventListener('change', renderCatalog);
        sortSelect.dataset.bound = 'true';
    }

    if (grid) {
        if (filteredProducts.length === 0) {
            grid.innerHTML = '<p>РќРёС‡РµРіРѕ РЅРµ РЅР°Р№РґРµРЅРѕ. РџРѕРїСЂРѕР±СѓР№С‚Рµ РёР·РјРµРЅРёС‚СЊ РїРѕРёСЃРє РёР»Рё СЃРѕСЂС‚РёСЂРѕРІРєСѓ.</p>';
        } else {
            grid.innerHTML = filteredProducts.map(p => `
            <div class="card fade-in">
                <img src="${assetUrl(p.img)}" alt="${p.name}">
                <div class="card-body">
                    <span class="card-chip">${p.category || 'Р СѓС‡РЅР°СЏ СЂР°Р±РѕС‚Р°'}</span>
                    <h3 class="card-title">${p.name}</h3>
                    <p class="card-text">${p.lead || p.desc}</p>
                    <p class="card-price">${p.price} в‚Ѕ</p>
                    <a href="${pageUrl('product.html')}?id=${p.id}" class="btn">РџРѕРґСЂРѕР±РЅРµРµ</a>
                </div>
            </div>
        `).join('');
        }
    }

    if (featuredGrid) {
        featuredGrid.innerHTML = products.slice(0, 3).map(p => `
        <div class="card fade-in">
            <img src="${assetUrl(p.img)}" alt="${p.name}">
            <div class="card-body">
                <span class="card-chip">${p.category || 'Р’С‹Р±РѕСЂ СЃС‚СѓРґРёРё'}</span>
                <h3 class="card-title">${p.name}</h3>
                <p class="card-text">${p.lead || p.desc}</p>
                <p class="card-price">${p.price} в‚Ѕ</p>
                <a href="${pageUrl('product.html')}?id=${p.id}" class="btn">РџРѕРґСЂРѕР±РЅРµРµ</a>
            </div>
        </div>
    `).join('');
    }

    triggerFadeIn();
};

// Render: Product Page
const renderProduct = () => {
    const container = document.getElementById('product-details');
    if (!container) return;
    
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id'));
    const product = getStr('products').find(p => p.id === id);
    
    if (!product) {
        container.innerHTML = '<p>РўРѕРІР°СЂ РЅРµ РЅР°Р№РґРµРЅ.</p>';
        return;
    }
    
    container.innerHTML = `
        <div class="product-layout fade-in">
            <img src="${assetUrl(product.img)}" class="product-image" alt="${product.name}">
            <div class="product-content">
                <span class="product-badge">РњРµР±РµР»СЊ СЂСѓС‡РЅРѕР№ СЂР°Р±РѕС‚С‹</span>
                <h2>${product.name}</h2>
                <p class="product-lead">${product.lead || ''}</p>
                <h3 class="product-price">${product.price} в‚Ѕ</h3>
                <p class="product-description">${product.desc}</p>
                <div class="product-specs">
                    <div class="spec-item"><span>РњР°С‚РµСЂРёР°Р»С‹</span><strong>${product.specs?.material || 'РџРѕРґ Р·Р°РєР°Р·'}</strong></div>
                    <div class="spec-item"><span>Р Р°Р·РјРµСЂ</span><strong>${product.specs?.dimensions || 'РЈС‚РѕС‡РЅСЏРµС‚СЃСЏ'}</strong></div>
                    <div class="spec-item"><span>РР·РіРѕС‚РѕРІР»РµРЅРёРµ</span><strong>${product.specs?.production || 'Р”Рѕ 14 РґРЅРµР№'}</strong></div>
                </div>
                <ul class="product-features">
                    ${(product.details || []).map(detail => `<li>${detail}</li>`).join('')}
                </ul>
                <div class="product-actions">
                    <button class="btn" data-action="add-to-cart" data-product-id="${product.id}">Р’ РєРѕСЂР·РёРЅСѓ</button>
                </div>
            </div>
        </div>
    `;
    triggerFadeIn();
};

const addToCart = id => {
    const cart = getStr('cart');
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        const product = getStr('products').find(p => p.id === id);
        if (!product) return;
        cart.push({ ...product, qty: 1 });
    }
    setStr('cart', cart);
    showSiteDialog({ title: 'РўРѕРІР°СЂ РґРѕР±Р°РІР»РµРЅ', message: 'РўРѕРІР°СЂ РґРѕР±Р°РІР»РµРЅ РІ РєРѕСЂР·РёРЅСѓ.' });
};

const addToFavs = id => {
    if(!requireAuth()) return;
    const favs = getStr('favorites');
    if(!favs.includes(id)) {
        favs.push(id);
        setStr('favorites', favs);
        showSiteDialog({ title: 'РР·Р±СЂР°РЅРЅРѕРµ', message: 'РўРѕРІР°СЂ РґРѕР±Р°РІР»РµРЅ РІ РёР·Р±СЂР°РЅРЅРѕРµ.' });
    } else {
        showSiteDialog({ title: 'РР·Р±СЂР°РЅРЅРѕРµ', message: 'РўРѕРІР°СЂ СѓР¶Рµ РІ РёР·Р±СЂР°РЅРЅРѕРј.' });
    }
};

const renderCart = () => {
    const container = document.getElementById('cart-content');
    const totalEl = document.getElementById('cart-total');
    if (!container || !totalEl) return;

    const cart = getStr('cart');

    if (cart.length === 0) {
        container.innerHTML = '<p>Р’Р°С€Р° РєРѕСЂР·РёРЅР° РїСѓСЃС‚Р°.</p>';
        totalEl.innerText = 'РС‚РѕРіРѕ: 0 в‚Ѕ';
        return;
    }

    container.innerHTML = cart.map((item, index) => `
        <article class="cart-card">
            <img class="cart-card__image" src="${escapeHtml(assetUrl(item.img))}" alt="${escapeHtml(item.name)}">
            <div class="cart-card__content">
                <div class="cart-card__head">
                    <div>
                        <span class="card-chip">${escapeHtml(item.category || 'РњРµР±РµР»СЊ')}</span>
                        <h3 class="cart-card__title">${escapeHtml(item.name)}</h3>
                        <p class="cart-card__lead">${escapeHtml(item.lead || '')}</p>
                    </div>
                    <button class="btn btn-danger btn-small" data-action="remove-cart-item" data-cart-index="${index}">РЈРґР°Р»РёС‚СЊ</button>
                </div>
                <div class="cart-card__meta">
                    <div class="cart-card__meta-item">
                        <span>Р¦РµРЅР°</span>
                        <strong>${item.price} в‚Ѕ</strong>
                    </div>
                    <div class="cart-card__meta-item">
                        <span>РљРѕР»РёС‡РµСЃС‚РІРѕ</span>
                        <input class="cart-qty-input" type="number" min="1" value="${item.qty}" data-action="update-cart-qty" data-cart-index="${index}">
                    </div>
                    <div class="cart-card__meta-item">
                        <span>РЎСѓРјРјР°</span>
                        <strong>${item.price * item.qty} в‚Ѕ</strong>
                    </div>
                </div>
            </div>
        </article>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    totalEl.innerText = `РС‚РѕРіРѕ: ${total} в‚Ѕ`;
};

const updateQty = (index, qty) => {
    const cart = getStr('cart');
    if (!cart[index]) return;
    cart[index].qty = Math.max(1, parseInt(qty, 10) || 1);
    setStr('cart', cart);
    renderCart();
};

const removeCart = index => {
    const cart = getStr('cart');
    cart.splice(index, 1);
    setStr('cart', cart);
    renderCart();
};

const clearCart = () => {
    setStr('cart', []);
    renderCart();
};

const checkout = () => {
    const cart = getStr('cart');
    if (cart.length === 0) {
        showSiteDialog({ title: 'РљРѕСЂР·РёРЅР°', message: 'РљРѕСЂР·РёРЅР° РїСѓСЃС‚Р°!' });
        return;
    }

    const orders = getStr('orders');
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    orders.push({
        id: Date.now(),
        userId: null,
        userName: 'Р“РѕСЃС‚СЊ',
        items: cart,
        total,
        status: 'РќРѕРІС‹Р№'
    });

    setStr('orders', orders);
    clearCart();
    showSiteDialog({
        title: 'Р—Р°РєР°Р· РѕС„РѕСЂРјР»РµРЅ',
        message: 'Р—Р°РєР°Р· СѓСЃРїРµС€РЅРѕ РѕС„РѕСЂРјР»РµРЅ. РњРµРЅРµРґР¶РµСЂ СЃРІСЏР¶РµС‚СЃСЏ СЃ РІР°РјРё РґР»СЏ РїРѕРґС‚РІРµСЂР¶РґРµРЅРёСЏ.'
    });
};

const toggleForm = () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('reg-form');
    if (!loginForm || !registerForm) return;

    const showLogin = loginForm.style.display === 'none';
    loginForm.style.display = showLogin ? 'block' : 'none';
    registerForm.style.display = showLogin ? 'none' : 'block';
};

const login = () => {
    const log = document.getElementById('log-login')?.value;
    const pass = document.getElementById('log-pass')?.value;
    const users = getStr('users');
    const user = users.find(item => item.login === log && item.password === pass);

    if (!user) {
        alert('РќРµРІРµСЂРЅС‹Р№ Р»РѕРіРёРЅ РёР»Рё РїР°СЂРѕР»СЊ');
        return;
    }

    localStorage.setItem('currentUser', JSON.stringify(user));
    currentUser = user;
    window.location.href = user.role === 'admin' ? pageUrl('admin.html') : pageUrl('profile.html');
};

const register = () => {
    const name = document.getElementById('reg-name')?.value.trim();
    const log = document.getElementById('reg-login')?.value.trim();
    const pass = document.getElementById('reg-pass')?.value;
    if (!name || !log || !pass) {
        alert('Р—Р°РїРѕР»РЅРёС‚Рµ РІСЃРµ РїРѕР»СЏ');
        return;
    }

    const users = getStr('users');
    if (users.find(user => user.login === log)) {
        alert('Р›РѕРіРёРЅ Р·Р°РЅСЏС‚');
        return;
    }

    const newUser = { id: Date.now(), name, login: log, password: pass, role: 'user' };
    users.push(newUser);
    setStr('users', users);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    currentUser = newUser;
    window.location.href = pageUrl('profile.html');
};

const updateProductEditorState = () => {
    const isEditing = Boolean(document.getElementById('prod-id')?.value);
    const title = document.getElementById('product-editor-title');
    const subtitle = document.getElementById('product-editor-subtitle');
    const saveButton = document.getElementById('admin-save-product');

    if (title) {
        title.textContent = isEditing ? 'Р РµРґР°РєС‚РёСЂРѕРІР°С‚СЊ С‚РѕРІР°СЂ' : 'Р”РѕР±Р°РІРёС‚СЊ С‚РѕРІР°СЂ';
    }

    if (subtitle) {
        subtitle.textContent = isEditing
            ? 'РР·РјРµРЅРёС‚Рµ РґР°РЅРЅС‹Рµ С‚РѕРІР°СЂР° Рё СЃРѕС…СЂР°РЅРёС‚Рµ РѕР±РЅРѕРІР»С‘РЅРЅСѓСЋ РєР°СЂС‚РѕС‡РєСѓ.'
            : 'Р—Р°РїРѕР»РЅРёС‚Рµ РєР°СЂС‚РѕС‡РєСѓ С‚РѕРІР°СЂР° Рё СЃРѕС…СЂР°РЅРёС‚Рµ РёР·РјРµРЅРµРЅРёСЏ.';
    }

    if (saveButton) {
        saveButton.textContent = isEditing ? 'РЎРѕС…СЂР°РЅРёС‚СЊ РёР·РјРµРЅРµРЅРёСЏ' : 'РЎРѕС…СЂР°РЅРёС‚СЊ С‚РѕРІР°СЂ';
    }
};

const resetProductForm = ({ preserveId = false } = {}) => {
    const fieldIds = [
        'prod-id',
        'prod-name',
        'prod-category',
        'prod-lead',
        'prod-price',
        'prod-img',
        'prod-material',
        'prod-dimensions',
        'prod-production',
        'prod-desc',
        'prod-details'
    ];

    fieldIds.forEach(id => {
        const field = document.getElementById(id);
        if (field) {
            if (id === 'prod-id' && preserveId) {
                return;
            }
            field.value = '';
        }
    });

    updateProductEditorState();
};

const openAdminModal = modalId => {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.classList.add('is-visible');
    modal.setAttribute('aria-hidden', 'false');
    syncDialogOpenState();

    const firstField = modal.querySelector('input:not([type="hidden"]), textarea, select, button');
    firstField?.focus();
};

const closeAdminModal = modalId => {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.classList.remove('is-visible');
    modal.setAttribute('aria-hidden', 'true');
    syncDialogOpenState();
};

const openProductEditor = () => {
    updateProductEditorState();
    openAdminModal('product-editor-modal');
};

const renderAdminProducts = () => {
    const container = document.getElementById('admin-products');
    if (!container) return;

    const products = getStr('products');
    container.innerHTML = products.map(product => `
        <tr>
            <td>${product.id}</td>
            <td>${escapeHtml(product.name)}</td>
            <td>${product.price} в‚Ѕ</td>
            <td>
                <div class="table-actions">
                    <button class="btn btn-small" data-action="edit-product" data-product-id="${product.id}">Р РµРґР°РєС‚РёСЂРѕРІР°С‚СЊ</button>
                    <button class="btn btn-danger btn-small" data-action="delete-product" data-product-id="${product.id}">РЈРґР°Р»РёС‚СЊ</button>
                </div>
            </td>
        </tr>
    `).join('');
};

const saveProduct = () => {
    const id = document.getElementById('prod-id')?.value;
    const name = document.getElementById('prod-name')?.value.trim();
    const category = document.getElementById('prod-category')?.value.trim();
    const lead = document.getElementById('prod-lead')?.value.trim();
    const price = document.getElementById('prod-price')?.value;
    const img = document.getElementById('prod-img')?.value.trim();
    const material = document.getElementById('prod-material')?.value.trim();
    const dimensions = document.getElementById('prod-dimensions')?.value.trim();
    const production = document.getElementById('prod-production')?.value.trim();
    const desc = document.getElementById('prod-desc')?.value.trim();
    const details = (document.getElementById('prod-details')?.value || '')
        .split('\n')
        .map(item => item.trim())
        .filter(Boolean);

    if (!name || !price) {
        alert('Р—Р°РїРѕР»РЅРёС‚Рµ РѕР±СЏР·Р°С‚РµР»СЊРЅС‹Рµ РїРѕР»СЏ');
        return;
    }

    const products = getStr('products');
    const productData = {
        id: id ? parseInt(id, 10) : Date.now(),
        name,
        category: category || 'Р”СЂСѓРіРѕРµ',
        lead: lead || 'РђРІС‚РѕСЂСЃРєР°СЏ РјРµР±РµР»СЊ СЂСѓС‡РЅРѕР№ СЂР°Р±РѕС‚С‹ РґР»СЏ СЃРѕРІСЂРµРјРµРЅРЅРѕРіРѕ РёРЅС‚РµСЂСЊРµСЂР°.',
        price: parseInt(price, 10),
        img: img || 'img/chair.jpg',
        desc: desc || 'РР·РґРµР»РёРµ СЃРѕР·РґР°РµС‚СЃСЏ РІСЂСѓС‡РЅСѓСЋ РёР· РєР°С‡РµСЃС‚РІРµРЅРЅС‹С… РјР°С‚РµСЂРёР°Р»РѕРІ СЃ РІРЅРёРјР°РЅРёРµРј Рє РґРµС‚Р°Р»СЏРј Рё РґРѕР»РіРѕРІРµС‡РЅРѕСЃС‚Рё.',
        details: details.length ? details : ['Р СѓС‡РЅР°СЏ СЃР±РѕСЂРєР°', 'РќР°С‚СѓСЂР°Р»СЊРЅС‹Рµ РјР°С‚РµСЂРёР°Р»С‹', 'РџРѕРґС…РѕРґРёС‚ РґР»СЏ Р¶РёР»РѕРіРѕ РёРЅС‚РµСЂСЊРµСЂР°'],
        specs: {
            material: material || 'РџРѕРґ Р·Р°РєР°Р·',
            dimensions: dimensions || 'РЈС‚РѕС‡РЅСЏРµС‚СЃСЏ',
            production: production || 'Р”Рѕ 14 РґРЅРµР№'
        }
    };

    if (id) {
        const index = products.findIndex(product => product.id === parseInt(id, 10));
        if (index > -1) {
            products[index] = productData;
        }
    } else {
        products.push(productData);
    }

    setStr('products', products);
    resetProductForm();
    closeAdminModal('product-editor-modal');
    renderAdminProducts();
    renderCatalog();
};

const editProduct = id => {
    const product = getStr('products').find(item => item.id === id);
    if (!product) return;

    document.getElementById('prod-id').value = product.id;
    document.getElementById('prod-name').value = product.name;
    document.getElementById('prod-category').value = product.category || '';
    document.getElementById('prod-lead').value = product.lead || '';
    document.getElementById('prod-price').value = product.price;
    document.getElementById('prod-img').value = product.img || '';
    document.getElementById('prod-material').value = product.specs?.material || '';
    document.getElementById('prod-dimensions').value = product.specs?.dimensions || '';
    document.getElementById('prod-production').value = product.specs?.production || '';
    document.getElementById('prod-desc').value = product.desc || '';
    document.getElementById('prod-details').value = (product.details || []).join('\n');
    updateProductEditorState();
    openAdminModal('product-editor-modal');
};

const deleteProduct = id => {
    const products = getStr('products').filter(product => product.id !== id);
    setStr('products', products);
    renderAdminProducts();
    renderCatalog();
};

const renderAdminOrders = () => {
    const container = document.getElementById('admin-orders');
    if (!container) return;

    const orders = getStr('orders');
    if (orders.length === 0) {
        container.innerHTML = '<tr><td colspan="5">Р—Р°РєР°Р·РѕРІ РїРѕРєР° РЅРµС‚.</td></tr>';
        return;
    }

    container.innerHTML = orders.map(order => `
        <tr>
            <td>${order.id}</td>
            <td>${escapeHtml(order.userName || 'РљР»РёРµРЅС‚ РЅРµ СѓРєР°Р·Р°РЅ')}</td>
            <td>${Number(order.total) || 0} в‚Ѕ</td>
            <td>
                <select class="status-select" data-action="update-order-status" data-order-id="${order.id}">
                    <option value="РќРѕРІС‹Р№" ${order.status === 'РќРѕРІС‹Р№' ? 'selected' : ''}>РќРѕРІС‹Р№</option>
                    <option value="Р’ РґРѕСЃС‚Р°РІРєРµ" ${order.status === 'Р’ РґРѕСЃС‚Р°РІРєРµ' ? 'selected' : ''}>Р’ РґРѕСЃС‚Р°РІРєРµ</option>
                    <option value="Р”РѕСЃС‚Р°РІР»РµРЅ" ${order.status === 'Р”РѕСЃС‚Р°РІР»РµРЅ' ? 'selected' : ''}>Р”РѕСЃС‚Р°РІР»РµРЅ</option>
                    <option value="РћС‚РјРµРЅРµРЅ" ${order.status === 'РћС‚РјРµРЅРµРЅ' ? 'selected' : ''}>РћС‚РјРµРЅРµРЅ</option>
                </select>
            </td>
            <td><button class="btn btn-danger btn-small" data-action="delete-order" data-order-id="${order.id}">РЈРґР°Р»РёС‚СЊ</button></td>
        </tr>
    `).join('');
};

const updateOrderStatus = (id, status) => {
    const orders = getStr('orders');
    const index = orders.findIndex(order => order.id === id);
    if (index === -1) return;

    orders[index].status = status;
    setStr('orders', orders);
};

const deleteOrder = id => {
    const orders = getStr('orders').filter(order => order.id !== id);
    setStr('orders', orders);
    renderAdminOrders();
};

const renderAdminReviews = () => {
    const container = document.getElementById('admin-reviews');
    if (!container) return;

    const reviews = getStr('reviews');
    container.innerHTML = reviews.map(review => `
        <tr>
            <td>${review.id}</td>
            <td>${escapeHtml(review.name)}</td>
            <td>${'в­ђ'.repeat(review.rating)}</td>
            <td>${escapeHtml(review.text)}</td>
            <td>
                <div class="table-actions">
                    <button class="btn btn-small" data-action="edit-review" data-review-id="${review.id}">Р РµРґР°РєС‚РёСЂРѕРІР°С‚СЊ</button>
                    <button class="btn btn-danger btn-small" data-action="delete-review" data-review-id="${review.id}">РЈРґР°Р»РёС‚СЊ</button>
                </div>
            </td>
        </tr>
    `).join('');
};

const updateReviewEditorState = () => {
    const isEditing = Boolean(document.getElementById('review-id')?.value);
    const title = document.getElementById('review-editor-title');
    const subtitle = document.getElementById('review-editor-subtitle');
    const saveButton = document.getElementById('admin-save-review');

    if (title) {
        title.textContent = isEditing ? 'Р РµРґР°РєС‚РёСЂРѕРІР°С‚СЊ РѕС‚Р·С‹РІ' : 'Р”РѕР±Р°РІРёС‚СЊ РѕС‚Р·С‹РІ';
    }

    if (subtitle) {
        subtitle.textContent = isEditing
            ? 'РСЃРїСЂР°РІСЊС‚Рµ С‚РµРєСЃС‚ РёР»Рё РѕС†РµРЅРєСѓ Рё СЃРѕС…СЂР°РЅРёС‚Рµ РёР·РјРµРЅРµРЅРёСЏ.'
            : 'РќРѕРІС‹Р№ РѕС‚Р·С‹РІ РїРѕСЏРІРёС‚СЃСЏ РЅР° СЃС‚СЂР°РЅРёС†Рµ РїРѕСЃР»Рµ СЃРѕС…СЂР°РЅРµРЅРёСЏ.';
    }

    if (saveButton) {
        saveButton.textContent = isEditing ? 'РЎРѕС…СЂР°РЅРёС‚СЊ РёР·РјРµРЅРµРЅРёСЏ' : 'РЎРѕС…СЂР°РЅРёС‚СЊ РѕС‚Р·С‹РІ';
    }
};

const resetReviewForm = ({ preserveId = false } = {}) => {
    const reviewIdField = document.getElementById('review-id');
    if (reviewIdField && !preserveId) {
        reviewIdField.value = '';
    }

    document.getElementById('review-name').value = '';
    document.getElementById('review-rating').value = '5';
    document.getElementById('review-text').value = '';
    updateReviewEditorState();
};

const openReviewEditor = () => {
    updateReviewEditorState();
    openAdminModal('review-editor-modal');
};

const saveReview = () => {
    const id = document.getElementById('review-id')?.value;
    const name = document.getElementById('review-name')?.value.trim();
    const rating = parseInt(document.getElementById('review-rating')?.value || '5', 10);
    const text = document.getElementById('review-text')?.value.trim();

    if (!name || !text) {
        alert('Р—Р°РїРѕР»РЅРёС‚Рµ РёРјСЏ Рё С‚РµРєСЃС‚ РѕС‚Р·С‹РІР°');
        return;
    }

    const reviews = getStr('reviews');
    const reviewData = {
        id: id ? parseInt(id, 10) : Date.now(),
        name,
        rating,
        text
    };

    if (id) {
        const index = reviews.findIndex(review => review.id === parseInt(id, 10));
        if (index > -1) {
            reviews[index] = reviewData;
        }
    } else {
        reviews.push(reviewData);
    }

    setStr('reviews', reviews);
    resetReviewForm();
    closeAdminModal('review-editor-modal');
    renderAdminReviews();
    renderReviews();
};

const editReview = id => {
    const review = getStr('reviews').find(item => item.id === id);
    if (!review) return;

    document.getElementById('review-id').value = review.id;
    document.getElementById('review-name').value = review.name;
    document.getElementById('review-rating').value = review.rating;
    document.getElementById('review-text').value = review.text;
    updateReviewEditorState();
    openAdminModal('review-editor-modal');
};

const deleteReview = id => {
    const reviews = getStr('reviews').filter(review => review.id !== id);
    setStr('reviews', reviews);
    renderAdminReviews();
    renderReviews();
    if (document.getElementById('review-id')?.value === String(id)) {
        resetReviewForm();
        closeAdminModal('review-editor-modal');
    }
};

const setupAdminModals = () => {
    document.querySelectorAll('[data-admin-modal-close]').forEach(button => {
        button.addEventListener('click', () => {
            closeAdminModal(button.dataset.adminModalClose);
        });
    });

    document.addEventListener('keydown', event => {
        if (event.key !== 'Escape') return;

        const openedModal = document.querySelector('.admin-modal.is-visible');
        if (openedModal) {
            closeAdminModal(openedModal.id);
        }
    });
};

const renderProfile = () => {
    const profileName = document.getElementById('profile-name');
    const ordersContainer = document.getElementById('orders-list');
    const favoritesContainer = document.getElementById('favs-list');
    if (!profileName || !ordersContainer || !favoritesContainer) return;

    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user || user.role === 'admin') {
        window.location.href = pageUrl('login.html');
        return;
    }

    profileName.innerText = `Р—РґСЂР°РІСЃС‚РІСѓР№С‚Рµ, ${user.name}!`;

    const allProducts = getStr('products');
    const orders = getStr('orders').filter(order => order.userId === user.id);
    if (orders.length === 0) {
        ordersContainer.innerHTML = '<p class="profile-empty">РЈ РІР°СЃ РїРѕРєР° РЅРµС‚ Р·Р°РєР°Р·РѕРІ.</p>';
    } else {
        ordersContainer.innerHTML = orders.map(order => `
            <div class="order-card">
                <div class="order-card__top">
                    <div>
                        <h4>Р—Р°РєР°Р· #${order.id}</h4>
                        <p class="order-card__status">РЎС‚Р°С‚СѓСЃ: ${escapeHtml(order.status)}</p>
                    </div>
                    <strong class="order-card__total">${order.total} в‚Ѕ</strong>
                </div>
                <div class="order-items">
                    ${order.items.map(item => `
                        ${(() => {
                            const imageSrc = resolveProductImage(item, allProducts);

                            return `
                        <div class="order-item">
                            <img class="order-item__image" src="${escapeHtml(imageSrc)}" alt="${escapeHtml(item.name)}">
                            <div class="order-item__content">
                                <h5>${escapeHtml(item.name)}</h5>
                                <p>${escapeHtml(item.lead || item.category || 'РђРІС‚РѕСЂСЃРєР°СЏ РјРµР±РµР»СЊ')}</p>
                                <div class="order-item__meta">
                                    <span>${item.price} в‚Ѕ</span>
                                    <span>РљРѕР»РёС‡РµСЃС‚РІРѕ: ${item.qty}</span>
                                    <span>РЎСѓРјРјР°: ${item.price * item.qty} в‚Ѕ</span>
                                </div>
                            </div>
                        </div>
                    `;
                        })()}
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    const favoriteIds = getStr('favorites');
    const products = allProducts.filter(product => favoriteIds.includes(product.id));
    if (products.length === 0) {
        favoritesContainer.innerHTML = '<p class="profile-empty" style="grid-column: 1/-1;">РќРµС‚ РёР·Р±СЂР°РЅРЅС‹С… С‚РѕРІР°СЂРѕРІ.</p>';
    } else {
        favoritesContainer.innerHTML = products.map(product => `
            <div class="card">
                <img src="${escapeHtml(assetUrl(product.img))}" alt="${escapeHtml(product.name)}">
                <div class="card-body">
                    <h3 class="card-title">${escapeHtml(product.name)}</h3>
                    <button class="btn btn-secondary btn-small" data-action="remove-favorite" data-product-id="${product.id}">РЈРґР°Р»РёС‚СЊ</button>
                </div>
            </div>
        `).join('');
    }
};

const removeFav = id => {
    const favorites = getStr('favorites').filter(favoriteId => favoriteId !== id);
    setStr('favorites', favorites);
    renderProfile();
};

const renderReviews = () => {
    const container = document.getElementById('reviews-list');
    if (!container) return;

    const reviews = getStr('reviews');
    container.innerHTML = reviews.map(review => `
        <div class="review-card">
            <div class="review-card__head">
                <strong>${escapeHtml(review.name)}</strong>
                <span class="review-rating" aria-label="Оценка ${review.rating} из 5">
                    ${Array.from({ length: review.rating }, () => `<img src="${assetUrl('icon/star.svg')}" alt="" loading="lazy">`).join('')}
                </span>
            </div>
            <p>${escapeHtml(review.text)}</p>
        </div>
    `).join('');
};

const addReview = () => {
    const name = document.getElementById('rev-name')?.value.trim();
    const text = document.getElementById('rev-text')?.value.trim();
    const rating = parseInt(document.getElementById('rev-rating')?.value || '5', 10);

    if (!name || !text) {
        alert('Р—Р°РїРѕР»РЅРёС‚Рµ РёРјСЏ Рё С‚РµРєСЃС‚');
        return;
    }

    const reviews = getStr('reviews');
    reviews.push({ id: Date.now(), name, text, rating });
    setStr('reviews', reviews);

    document.getElementById('rev-name').value = '';
    document.getElementById('rev-text').value = '';
    document.getElementById('rev-rating').value = '5';
    renderReviewFormRating();
    renderReviews();
};

const renderReviewFormRating = () => {
    const select = document.getElementById('rev-rating');
    const starsContainer = document.getElementById('rev-rating-stars');
    if (!select || !starsContainer) return;

    const rating = parseInt(select.value || '5', 10);
    const safeRating = Number.isNaN(rating) ? 5 : Math.min(Math.max(rating, 1), 5);
    starsContainer.innerHTML = Array.from(
        { length: safeRating },
        () => `<img src="${assetUrl('icon/star.svg')}" alt="" loading="lazy">`
    ).join('');
};

const initReviewsMap = () => {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    if (mapContainer.dataset.mapReady === 'true') return;

    mapContainer.innerHTML = `
        <iframe
            title="HandCraft на Google Maps"
            src="https://www.google.com/maps?q=55.796127,49.106414&z=13&output=embed"
            width="100%"
            height="100%"
            style="border:0; display:block;"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen>
        </iframe>
    `;
    mapContainer.dataset.mapReady = 'true';
};

const initAdminPage = () => {
    if (!document.getElementById('admin-products')) return;
    window.location.href = pageUrl('index.html');
    return;

    setupAdminModals();
    document.getElementById('admin-open-product-modal')?.addEventListener('click', () => {
        resetProductForm();
        openProductEditor();
    });
    document.getElementById('admin-open-review-modal')?.addEventListener('click', () => {
        resetReviewForm();
        openReviewEditor();
    });
    document.getElementById('admin-save-product')?.addEventListener('click', saveProduct);
    document.getElementById('admin-clear-product')?.addEventListener('click', () => resetProductForm({ preserveId: true }));
    document.getElementById('admin-cancel-product')?.addEventListener('click', () => resetProductForm());
    document.getElementById('admin-save-review')?.addEventListener('click', saveReview);
    document.getElementById('admin-clear-review')?.addEventListener('click', () => resetReviewForm({ preserveId: true }));
    document.getElementById('admin-cancel-review')?.addEventListener('click', () => resetReviewForm());
    updateProductEditorState();
    updateReviewEditorState();
    renderAdminProducts();
    renderAdminOrders();
    renderAdminReviews();
};

const initCartPage = () => {
    if (!document.getElementById('cart-content')) return;

    document.getElementById('clear-cart-btn')?.addEventListener('click', clearCart);
    document.getElementById('checkout-btn')?.addEventListener('click', checkout);
    renderCart();
};

const initLoginPage = () => {
    if (!document.getElementById('login-form')) return;

    document.getElementById('login-submit')?.addEventListener('click', login);
    document.getElementById('register-submit')?.addEventListener('click', register);
    document.getElementById('toggle-to-register')?.addEventListener('click', toggleForm);
    document.getElementById('toggle-to-login')?.addEventListener('click', toggleForm);
};

const initProfilePage = () => {
    if (!document.getElementById('orders-list')) return;
    window.location.href = pageUrl('index.html');
};

const initReviewsPage = () => {
    if (!document.getElementById('reviews-list')) return;

    document.getElementById('add-review-btn')?.addEventListener('click', addReview);
    document.getElementById('rev-rating')?.addEventListener('change', renderReviewFormRating);
    renderReviewFormRating();
    renderReviews();
    initReviewsMap();
};

const setupDelegatedActions = () => {
    document.addEventListener('click', event => {
        const actionElement = event.target.closest('[data-action]');
        if (!actionElement) return;

        const productId = parseInt(actionElement.dataset.productId || '', 10);
        const reviewId = parseInt(actionElement.dataset.reviewId || '', 10);
        const orderId = parseInt(actionElement.dataset.orderId || '', 10);
        const cartIndex = parseInt(actionElement.dataset.cartIndex || '', 10);

        switch (actionElement.dataset.action) {
            case 'add-to-cart':
                addToCart(productId);
                break;
            case 'add-to-favorites':
                addToFavs(productId);
                break;
            case 'remove-cart-item':
                removeCart(cartIndex);
                break;
            case 'edit-product':
                editProduct(productId);
                break;
            case 'delete-product':
                deleteProduct(productId);
                break;
            case 'delete-order':
                deleteOrder(orderId);
                break;
            case 'edit-review':
                editReview(reviewId);
                break;
            case 'delete-review':
                deleteReview(reviewId);
                break;
            case 'remove-favorite':
                removeFav(productId);
                break;
            default:
                break;
        }
    });

    document.addEventListener('change', event => {
        const actionElement = event.target.closest('[data-action]');
        if (!actionElement) return;

        if (actionElement.dataset.action === 'update-cart-qty') {
            updateQty(parseInt(actionElement.dataset.cartIndex || '', 10), event.target.value);
        }

        if (actionElement.dataset.action === 'update-order-status') {
            updateOrderStatus(parseInt(actionElement.dataset.orderId || '', 10), event.target.value);
        }
    });
};

// Scroll Animations
const triggerFadeIn = () => {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });
    elements.forEach(el => observer.observe(el));
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initData();
    setupNav();
    setupThemeToggle();
    setupAboutTabs();
    setupAccordion();
    setupFurnitureOrderForm();
    setupDelegatedActions();
    renderFooter();
    setupSlider();
    renderCatalog();
    renderProduct();
    initAdminPage();
    initCartPage();
    initLoginPage();
    initProfilePage();
    initReviewsPage();
    triggerFadeIn();
    setupMojibakeObserver();
});



