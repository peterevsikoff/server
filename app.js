const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
    origin: '*'
}));

// определяем обработчик для маршрута "/"
app.get("/", function(request, response){
     
    // отправляем ответ
    response.send("<h2>Привет Expressreghteht!</h2>");
});

const testExample = {
    id: "1",
    shortName: "Опросник суицидального риска (ОСР)",
    fullName: "Опросник суицидального риска (модификация Т.Н.Разуваевой)",
    keyWords: "Суицидальный риск, девиантное поведение, аутоагрессия",
    description: "Целью данного опросника является диагностика суицидального риска; выявление уровня сформированности суицидальных намерений с целью предупреждения серьезных попыток самоубийства.",
    descriptionArray : ["Методика применяется в случае, если на основе предшествующего наблюдения (исследования) была выявлена высокая вероятность суицидального поведения. Тестированию должна предшествовать беседа, в ходе которой психолог должен проявить максимум внимания и сочувствия."],
    instruction: "Ответьте на предложенные вопросы, выразив согласие с утверждением (\"Да\") или несогласие (\"Нет\").",
    resultProcessing: "По каждому субшкальному диагностическому концепту подсчитывается сумма положительных ответов. Ответу «Да» начисляется 1 балл. Количество утверждений по каждому фактору принимается за 100%. Количеств баллов переводится в проценты. Делается вывод об уровне сформированности суицидальных намерений и конкретных факторах суицидального риска.",
    questions: [
        {text: "Вы все чувствуете острее, чем большинство людей", column: false, options: ["Да", "Нет"]},
        {text: "Вас часто одолевают мрачные мысли", column: false, options: ["Да", "Нет"]},
        {text: "Теперь Вы уже не надеетесь добиться желаемого положения в жизни", column: false, options: ["Да", "Нет"]},
        {text: "В случае неудачи Вам трудно начать новое дело", column: false, options: ["Да", "Нет"]},
        {text: "Вам определенно не везет в жизни", column: false, options: ["Да", "Нет"]},
        {text: "Учиться Вам стало труднее, чем раньше", column: false, options: ["Да", "Нет"]},
        {text: "Большинство людей довольны жизнью больше, чем Вы", column: false, options: ["Да", "Нет"]},
        {text: "Вы считаете, что смерть является искуплением грехов", column: false, options: ["Да", "Нет"]},
        {text: "Только зрелый человек может принять решение уйти из жизни", column: false, options: ["Да", "Нет"]},
        {text: "Временами у Вас бывают приступы неудержимого смеха или плача", column: false, options: ["Да", "Нет"]},
        {text: "Обычно Вы осторожны с людьми, которые относятся к Вам дружелюбнее, чем Вы ожидали", column: false, options: ["Да", "Нет"]},
        {text: "Вы считаете себя обреченным человеком", column: false, options: ["Да", "Нет"]},
        {text: "Мало кто искренне пытается помочь другим, если это связано с неудобствами", column: false, options: ["Да", "Нет"]},
        {text: "У Вас такое впечатление, что Вас никто не понимает", column: false, options: ["Да", "Нет"]},
        {text: "Человек, который вводит других в соблазн, оставляя без присмотра ценное имущество, виноват примерно столько же, сколько и тот, кто это имущество похищает", column: false, options: ["Да", "Нет"]},
        {text: "В Вашей жизни не было таких неудач, когда казалось, что все кончено", column: false, options: ["Да", "Нет"]},
        {text: "Обычно Вы удовлетворены своей судьбой", column: false, options: ["Да", "Нет"]},
        {text: "Вы считаете, что всегда нужно вовремя поставить точку", column: false, options: ["Да", "Нет"]},
        {text: "В Вашей жизни есть люди, привязанность к которым может очень повлиять на Ваши решения и даже изменить их", column: false, options: ["Да", "Нет"]},
        {text: "Когда Вас обижают, Вы стремитесь во что бы то ни стало доказать обидчику, что он поступил несправедливо", column: false, options: ["Да", "Нет"]},
        {text: "Часто Вы так переживаете, что это мешает Вам говорить", column: false, options: ["Да", "Нет"]},
        {text: "Вам часто кажется, что обстоятельства, в которых Вы оказались, отличаются особой несправедливостью", column: false, options: ["Да", "Нет"]},
        {text: "Иногда Вам кажется, что Вы вдруг сделали что-то скверное или даже хуже", column: false, options: ["Да", "Нет"]},
        {text: "Будущее представляется Вам довольно беспросветным", column: false, options: ["Да", "Нет"]},
        {text: "Большинство людей способны добиваться выгоды не совсем честным путем", column: false, options: ["Да", "Нет"]},
        {text: "Будущее слишком расплывчато, чтобы строить серьезные планы", column: false, options: ["Да", "Нет"]},
        {text: "Мало кому в жизни пришлось испытать то, что пережили недавно Вы", column: false, options: ["Да", "Нет"]},
        {text: "Вы склонны так остро переживать неприятности, что не можете выкинуть мысли об этом из головы", column: false, options: ["Да", "Нет"]},
        {text: "Часто Вы действуете необдуманно, повинуясь первому порыву", column: false, options: ["Да", "Нет"]},
    ],
    scales: [
        {name: "Демонстративность",
        description: "Желание привлечь внимание окружающих к своим несчастьям, добиться сочувствия и понимания. Оцениваемое из внешней позиции порой как \"шантаж\", \"истероидное выпячивание трудностей\", демонстративное суицидальное поведение переживается изнутри как \"крик о помощи\". Наиболее суицидоопасно сочетание с эмоциональной регидностью, когда \"диалог с миром\" может зайти слишком далеко.",
         levels: [
            {level: "0%", condition: [0, 1], description: ""},
            {level: "20%", condition: [1, 2], description: "Желание привлечь внимание окружающих к своим несчастьям, добиться сочувствия и понимания. Оцениваемое из внешней позиции порой как \"шантаж\", \"истероидное выпячивание трудностей\", демонстративное суицидальное поведение переживается изнутри как \"крик о помощи\". Наиболее суицидоопасно сочетание с эмоциональной регидностью, когда \"диалог с миром\" может зайти слишком далеко."},
            {level: "40%", condition: [2, 3], description: "Желание привлечь внимание окружающих к своим несчастьям, добиться сочувствия и понимания. Оцениваемое из внешней позиции порой как \"шантаж\", \"истероидное выпячивание трудностей\", демонстративное суицидальное поведение переживается изнутри как \"крик о помощи\". Наиболее суицидоопасно сочетание с эмоциональной регидностью, когда \"диалог с миром\" может зайти слишком далеко."},
            {level: "60%", condition: [3, 4], description: "Желание привлечь внимание окружающих к своим несчастьям, добиться сочувствия и понимания. Оцениваемое из внешней позиции порой как \"шантаж\", \"истероидное выпячивание трудностей\", демонстративное суицидальное поведение переживается изнутри как \"крик о помощи\". Наиболее суицидоопасно сочетание с эмоциональной регидностью, когда \"диалог с миром\" может зайти слишком далеко."},
            {level: "80%", condition: [4, 5], description: "Желание привлечь внимание окружающих к своим несчастьям, добиться сочувствия и понимания. Оцениваемое из внешней позиции порой как \"шантаж\", \"истероидное выпячивание трудностей\", демонстративное суицидальное поведение переживается изнутри как \"крик о помощи\". Наиболее суицидоопасно сочетание с эмоциональной регидностью, когда \"диалог с миром\" может зайти слишком далеко."},
            {level: "100%", condition: [5, 29], description: "Желание привлечь внимание окружающих к своим несчастьям, добиться сочувствия и понимания. Оцениваемое из внешней позиции порой как \"шантаж\", \"истероидное выпячивание трудностей\", демонстративное суицидальное поведение переживается изнутри как \"крик о помощи\". Наиболее суицидоопасно сочетание с эмоциональной регидностью, когда \"диалог с миром\" может зайти слишком далеко."},
        ], key: [
            {number: 12, answer: "Да"},
            {number: 14, answer: "Да"},
            {number: 20, answer: "Да"},
            {number: 22, answer: "Да"},
            {number: 27, answer: "Да"},
            {number: 27, answer: "Нет"},
        ]},
        {name: "Аффективность", 
        description: "Доминирование эмоций над интеллектуальным контролем в оценке ситуации. Готовность реагировать на психотравмирующую ситуацию непосредственно эмоционально. В крайнем варианте - аффективная блокада интеллекта.",
        levels: [
            {level: "0%", condition: [0, 1], description: ""},
            {level: "17%", condition: [1, 2], description: "Доминирование эмоций над интеллектуальным контролем в оценке ситуации. Готовность реагировать на психотравмирующую ситуацию непосредственно эмоционально. В крайнем варианте - аффективная блокада интеллекта."},
            {level: "33%", condition: [2, 3], description: "Доминирование эмоций над интеллектуальным контролем в оценке ситуации. Готовность реагировать на психотравмирующую ситуацию непосредственно эмоционально. В крайнем варианте - аффективная блокада интеллекта."},
            {level: "50%", condition: [3, 4], description: "Доминирование эмоций над интеллектуальным контролем в оценке ситуации. Готовность реагировать на психотравмирующую ситуацию непосредственно эмоционально. В крайнем варианте - аффективная блокада интеллекта."},
            {level: "66%", condition: [4, 5], description: "Доминирование эмоций над интеллектуальным контролем в оценке ситуации. Готовность реагировать на психотравмирующую ситуацию непосредственно эмоционально. В крайнем варианте - аффективная блокада интеллекта."},
            {level: "83%", condition: [5, 6], description: "Доминирование эмоций над интеллектуальным контролем в оценке ситуации. Готовность реагировать на психотравмирующую ситуацию непосредственно эмоционально. В крайнем варианте - аффективная блокада интеллекта."},
            {level: "100%", condition: [6, 29], description: "Доминирование эмоций над интеллектуальным контролем в оценке ситуации. Готовность реагировать на психотравмирующую ситуацию непосредственно эмоционально. В крайнем варианте - аффективная блокада интеллекта."},
        ], key: [
            {number: 1, answer: "Да"},
            {number: 10, answer: "Да"},
            {number: 20, answer: "Да"},
            {number: 23, answer: "Да"},
            {number: 28, answer: "Да"},
            {number: 29, answer: "Да"},
        ]},
        {name: "Уникальность",
        description: "Восприятие себя, ситуации, и, возможно, собственной жизни в целом как явления исключительного, не похожего на другие, и, следовательно, подразумевающего исключительные варианты выхода, в частности, суицид. Тесно связана с феноменом \"непроницаемости\" для опыта, т.е. с недостаточным умением использовать свой и чужой жизненный опыт",
        levels: [
            {level: "0%", condition: [0, 1], description: ""},
            {level: "20%", condition: [1, 2], description: "Восприятие себя, ситуации, и, возможно, собственной жизни в целом как явления исключительного, не похожего на другие, и, следовательно, подразумевающего исключительные варианты выхода, в частности, суицид. Тесно связана с феноменом \"непроницаемости\" для опыта, т.е. с недостаточным умением использовать свой и чужой жизненный опыт"},
            {level: "40%", condition: [2, 3], description: "Восприятие себя, ситуации, и, возможно, собственной жизни в целом как явления исключительного, не похожего на другие, и, следовательно, подразумевающего исключительные варианты выхода, в частности, суицид. Тесно связана с феноменом \"непроницаемости\" для опыта, т.е. с недостаточным умением использовать свой и чужой жизненный опыт"},
            {level: "60%", condition: [3, 4], description: "Восприятие себя, ситуации, и, возможно, собственной жизни в целом как явления исключительного, не похожего на другие, и, следовательно, подразумевающего исключительные варианты выхода, в частности, суицид. Тесно связана с феноменом \"непроницаемости\" для опыта, т.е. с недостаточным умением использовать свой и чужой жизненный опыт"},
            {level: "80%", condition: [4, 5], description: "Восприятие себя, ситуации, и, возможно, собственной жизни в целом как явления исключительного, не похожего на другие, и, следовательно, подразумевающего исключительные варианты выхода, в частности, суицид. Тесно связана с феноменом \"непроницаемости\" для опыта, т.е. с недостаточным умением использовать свой и чужой жизненный опыт"},
            {level: "100%", condition: [5, 29], description: "Восприятие себя, ситуации, и, возможно, собственной жизни в целом как явления исключительного, не похожего на другие, и, следовательно, подразумевающего исключительные варианты выхода, в частности, суицид. Тесно связана с феноменом \"непроницаемости\" для опыта, т.е. с недостаточным умением использовать свой и чужой жизненный опыт"},
        ], key: [
            {number: 1, answer: "Да"},
            {number: 12, answer: "Да"},
            {number: 14, answer: "Да"},
            {number: 22, answer: "Да"},
            {number: 27, answer: "Да"},
        ]},
        {name: "Несостоятельность", 
        description: "Отрицательная концепция собственной личности. Представление о своей несостоятельности, некомпетентности, ненужности, \"выключенности\" из мира. Данная субшкала может быть связана с представлениями о физической, интеллектуальной, моральной и прочей несостоятельностью. Несостоятельность выражает интрапунитивный радикал. Формула внешнего монолога - \"Я плох\".",
        levels: [
            {level: "0%", condition: [0, 1], description: ""},
            {level: "20%", condition: [1, 2], description: "Отрицательная концепция собственной личности. Представление о своей несостоятельности, некомпетентности, ненужности, \"выключенности\" из мира. Данная субшкала может быть связана с представлениями о физической, интеллектуальной, моральной и прочей несостоятельностью. Несостоятельность выражает интрапунитивный радикал. Формула внешнего монолога - \"Я плох\"."},
            {level: "40%", condition: [2, 3], description: "Отрицательная концепция собственной личности. Представление о своей несостоятельности, некомпетентности, ненужности, \"выключенности\" из мира. Данная субшкала может быть связана с представлениями о физической, интеллектуальной, моральной и прочей несостоятельностью. Несостоятельность выражает интрапунитивный радикал. Формула внешнего монолога - \"Я плох\"."},
            {level: "60%", condition: [3, 4], description: "Отрицательная концепция собственной личности. Представление о своей несостоятельности, некомпетентности, ненужности, \"выключенности\" из мира. Данная субшкала может быть связана с представлениями о физической, интеллектуальной, моральной и прочей несостоятельностью. Несостоятельность выражает интрапунитивный радикал. Формула внешнего монолога - \"Я плох\"."},
            {level: "80%", condition: [4, 5], description: "Отрицательная концепция собственной личности. Представление о своей несостоятельности, некомпетентности, ненужности, \"выключенности\" из мира. Данная субшкала может быть связана с представлениями о физической, интеллектуальной, моральной и прочей несостоятельностью. Несостоятельность выражает интрапунитивный радикал. Формула внешнего монолога - \"Я плох\"."},
            {level: "100%", condition: [5, 29], description: "Отрицательная концепция собственной личности. Представление о своей несостоятельности, некомпетентности, ненужности, \"выключенности\" из мира. Данная субшкала может быть связана с представлениями о физической, интеллектуальной, моральной и прочей несостоятельностью. Несостоятельность выражает интрапунитивный радикал. Формула внешнего монолога - \"Я плох\"."},
        ], key: [
            {number: 2, answer: "Да"},
            {number: 3, answer: "Да"},
            {number: 6, answer: "Да"},
            {number: 7, answer: "Да"},
            {number: 17, answer: "Да"},
        ]},
        {name: "Социальный пессимизм", 
        description: "Отрицательная концепция окружающего мира. Восприятие мира как враждебного, не соответствующего представлениям о нормальных или удовлетворительных для человека отношениях с окружающими. Социальный пессимизм тесно связан с экстрапунитивным стилем каузальной атрибуции. В отсутствие Я наблюдается экстрапунитивность по формуле внутреннего монолога \"Вы все недостойны меня\".",
        levels: [
            {level: "0%", condition: [0, 1], description: ""},
            {level: "14%", condition: [1, 2], description: "Отрицательная концепция окружающего мира. Восприятие мира как враждебного, не соответствующего представлениям о нормальных или удовлетворительных для человека отношениях с окружающими. Социальный пессимизм тесно связан с экстрапунитивным стилем каузальной атрибуции. В отсутствие Я наблюдается экстрапунитивность по формуле внутреннего монолога \"Вы все недостойны меня\"."},
            {level: "29%", condition: [2, 3], description: "Отрицательная концепция окружающего мира. Восприятие мира как враждебного, не соответствующего представлениям о нормальных или удовлетворительных для человека отношениях с окружающими. Социальный пессимизм тесно связан с экстрапунитивным стилем каузальной атрибуции. В отсутствие Я наблюдается экстрапунитивность по формуле внутреннего монолога \"Вы все недостойны меня\"."},
            {level: "43%", condition: [3, 4], description: "Отрицательная концепция окружающего мира. Восприятие мира как враждебного, не соответствующего представлениям о нормальных или удовлетворительных для человека отношениях с окружающими. Социальный пессимизм тесно связан с экстрапунитивным стилем каузальной атрибуции. В отсутствие Я наблюдается экстрапунитивность по формуле внутреннего монолога \"Вы все недостойны меня\"."},
            {level: "57%", condition: [4, 5], description: "Отрицательная концепция окружающего мира. Восприятие мира как враждебного, не соответствующего представлениям о нормальных или удовлетворительных для человека отношениях с окружающими. Социальный пессимизм тесно связан с экстрапунитивным стилем каузальной атрибуции. В отсутствие Я наблюдается экстрапунитивность по формуле внутреннего монолога \"Вы все недостойны меня\"."},
            {level: "71%", condition: [5, 6], description: "Отрицательная концепция окружающего мира. Восприятие мира как враждебного, не соответствующего представлениям о нормальных или удовлетворительных для человека отношениях с окружающими. Социальный пессимизм тесно связан с экстрапунитивным стилем каузальной атрибуции. В отсутствие Я наблюдается экстрапунитивность по формуле внутреннего монолога \"Вы все недостойны меня\"."},
            {level: "86%", condition: [6, 7], description: "Отрицательная концепция окружающего мира. Восприятие мира как враждебного, не соответствующего представлениям о нормальных или удовлетворительных для человека отношениях с окружающими. Социальный пессимизм тесно связан с экстрапунитивным стилем каузальной атрибуции. В отсутствие Я наблюдается экстрапунитивность по формуле внутреннего монолога \"Вы все недостойны меня\"."},
            {level: "100%", condition: [7, 29], description: "Отрицательная концепция окружающего мира. Восприятие мира как враждебного, не соответствующего представлениям о нормальных или удовлетворительных для человека отношениях с окружающими. Социальный пессимизм тесно связан с экстрапунитивным стилем каузальной атрибуции. В отсутствие Я наблюдается экстрапунитивность по формуле внутреннего монолога \"Вы все недостойны меня\"."},
        ], key: [
            {number: 5, answer: "Да"},
            {number: 11, answer: "Да"},
            {number: 13, answer: "Да"},
            {number: 15, answer: "Да"},
            {number: 17, answer: "Да"},
            {number: 22, answer: "Да"},
            {number: 25, answer: "Да"},
        ]},
        {name: "Слом культурных барьеров", 
        description: "Культ самоубийства. Поиск культурных ценностей и нормативов, оправдывающих суицидальное поведение или даже делающих его в какой-то мере привлекательным. Заимствование суицидальных моделей поведения из литературы и кино. В крайнем варианте - инверсия ценности смерти и жизни. В отсутствие выраженных пиков по другим шкалам это может говорить только об \"экзистенции смерти\". Одна из возможных внутренних причин культа смерти - доведенная до патологического максимализма смысловая установка на самодеятельность: \"Вершитель собственной судьбы сам определяет конец своего существования\".",
        levels: [
            {level: "0%", condition: [0, 1], description: ""},
            {level: "33%", condition: [1, 2], description: "Культ самоубийства. Поиск культурных ценностей и нормативов, оправдывающих суицидальное поведение или даже делающих его в какой-то мере привлекательным. Заимствование суицидальных моделей поведения из литературы и кино. В крайнем варианте - инверсия ценности смерти и жизни. В отсутствие выраженных пиков по другим шкалам это может говорить только об \"экзистенции смерти\". Одна из возможных внутренних причин культа смерти - доведенная до патологического максимализма смысловая установка на самодеятельность: \"Вершитель собственной судьбы сам определяет конец своего существования\"."},
            {level: "66%", condition: [2, 3], description: "Культ самоубийства. Поиск культурных ценностей и нормативов, оправдывающих суицидальное поведение или даже делающих его в какой-то мере привлекательным. Заимствование суицидальных моделей поведения из литературы и кино. В крайнем варианте - инверсия ценности смерти и жизни. В отсутствие выраженных пиков по другим шкалам это может говорить только об \"экзистенции смерти\". Одна из возможных внутренних причин культа смерти - доведенная до патологического максимализма смысловая установка на самодеятельность: \"Вершитель собственной судьбы сам определяет конец своего существования\"."},
            {level: "100%", condition: [3, 29], description: "Культ самоубийства. Поиск культурных ценностей и нормативов, оправдывающих суицидальное поведение или даже делающих его в какой-то мере привлекательным. Заимствование суицидальных моделей поведения из литературы и кино. В крайнем варианте - инверсия ценности смерти и жизни. В отсутствие выраженных пиков по другим шкалам это может говорить только об \"экзистенции смерти\". Одна из возможных внутренних причин культа смерти - доведенная до патологического максимализма смысловая установка на самодеятельность: \"Вершитель собственной судьбы сам определяет конец своего существования\"."},
        ], key: [
            {number: 8, answer: "Да"},
            {number: 9, answer: "Да"},
            {number: 18, answer: "Да"},
        ]},
        {name: "Максимализм", 
        description: "Инфантильный максимализм ценностных установок. Распространение на все сферы жизни содержания локального конфликта в какой-то одной жизненной сфере. Невозможность компенсации. Аффективная фиксация на неудачах.",
        levels: [
            {level: "0%", condition: [0, 1], description: ""},
            {level: "50%", condition: [1, 2], description: "Инфантильный максимализм ценностных установок. Распространение на все сферы жизни содержания локального конфликта в какой-то одной жизненной сфере. Невозможность компенсации. Аффективная фиксация на неудачах."},
            {level: "100%", condition: [2, 29], description: "Инфантильный максимализм ценностных установок. Распространение на все сферы жизни содержания локального конфликта в какой-то одной жизненной сфере. Невозможность компенсации. Аффективная фиксация на неудачах."},
        ], key: [
            {number: 4, answer: "Да"},
            {number: 16, answer: "Да"},
        ]},
        {name: "Временная перспектива", 
        description: "Невозможность конструктивного планирования будущего. Это может быть следствием сильной погруженности в настоящую ситуацию, трансформацией чувства неразрешимости текущей проблемы в глобальный страх неудач и поражений в будущем.",
        levels: [
            {level: "0%", condition: [0, 1], description: ""},
            {level: "17%", condition: [1, 2], description: "Невозможность конструктивного планирования будущего. Это может быть следствием сильной погруженности в настоящую ситуацию, трансформацией чувства неразрешимости текущей проблемы в глобальный страх неудач и поражений в будущем."},
            {level: "33%", condition: [2, 3], description: "Невозможность конструктивного планирования будущего. Это может быть следствием сильной погруженности в настоящую ситуацию, трансформацией чувства неразрешимости текущей проблемы в глобальный страх неудач и поражений в будущем."},
            {level: "50%", condition: [3, 4], description: "Невозможность конструктивного планирования будущего. Это может быть следствием сильной погруженности в настоящую ситуацию, трансформацией чувства неразрешимости текущей проблемы в глобальный страх неудач и поражений в будущем."},
            {level: "66%", condition: [4, 5], description: "Невозможность конструктивного планирования будущего. Это может быть следствием сильной погруженности в настоящую ситуацию, трансформацией чувства неразрешимости текущей проблемы в глобальный страх неудач и поражений в будущем."},
            {level: "83%", condition: [5, 6], description: "Невозможность конструктивного планирования будущего. Это может быть следствием сильной погруженности в настоящую ситуацию, трансформацией чувства неразрешимости текущей проблемы в глобальный страх неудач и поражений в будущем."},
            {level: "100%", condition: [6, 29], description: "Невозможность конструктивного планирования будущего. Это может быть следствием сильной погруженности в настоящую ситуацию, трансформацией чувства неразрешимости текущей проблемы в глобальный страх неудач и поражений в будущем."},
        ], key: [
            {number: 2, answer: "Да"},
            {number: 3, answer: "Да"},
            {number: 12, answer: "Да"},
            {number: 24, answer: "Да"},
            {number: 26, answer: "Да"},
            {number: 27, answer: "Да"},
        ]},
        {name: "Антисуицидальный фактор", 
        description: "Даже при высокой выраженности всех остальных факторов есть фактор, который снимает глобальный суицидальный риск. Это глубокое понимание чувства ответственности за близких, чувство долга. Это представление о греховности самоубийства, антиэстетичности его, боязнь боли и физических страданий. В определенном смысле это показатель наличного уровня предпосылок для психокоррекционной работы.",
        levels: [
            {level: "0%", condition: [0, 1], description: ""},
            {level: "50%", condition: [1, 2], description: "Даже при высокой выраженности всех остальных факторов есть фактор, который снимает глобальный суицидальный риск. Это глубокое понимание чувства ответственности за близких, чувство долга. Это представление о греховности самоубийства, антиэстетичности его, боязнь боли и физических страданий. В определенном смысле это показатель наличного уровня предпосылок для психокоррекционной работы."},
            {level: "100%", condition: [2, 29], description: "Даже при высокой выраженности всех остальных факторов есть фактор, который снимает глобальный суицидальный риск. Это глубокое понимание чувства ответственности за близких, чувство долга. Это представление о греховности самоубийства, антиэстетичности его, боязнь боли и физических страданий. В определенном смысле это показатель наличного уровня предпосылок для психокоррекционной работы."},
        ], key: [
            {number: 19, answer: "Да"},
            {number: 21, answer: "Да"},
        ]},
    ]

};

app.get("/api/tests", async (request, response) => {
    response.send([testExample]);
});

const port = process.env.PORT || 3000;

// начинаем прослушивать подключения на 3000 порту
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//https://server-497g.onrender.com