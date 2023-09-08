/*! For license information please see 72607.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[72607],{72607:(e,t,a)=>{a.r(t),a.d(t,{additionalProperty:()=>g,anyOfValues:()=>x,bubbleChartValidateMsg:()=>E,default:()=>q,defaultError:()=>i,defaultInvalidChart:()=>s,duplicateSeriesID:()=>u,enumValues:()=>P,gaugeCannotExceedLimit:()=>b,histogramEmptyField:()=>y,invalidSeriesType:()=>I,layerLoadFailure:()=>m,lineChartMarkersCannotExceedLimit:()=>k,lineChartSeriesAndMarkersCannotExceedLimit:()=>D,maxItems:()=>L,minItems:()=>c,minLength:()=>h,negativeValueInDataForLogTransformation:()=>l,negativeValueInDataForSqrtTransformation:()=>d,nonNumericAggregation:()=>C,or:()=>f,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:()=>v,pieChartSlicesCannotExceedLimit:()=>V,queryError:()=>S,requiredProperty:()=>$,threePlusSeriesBarCountCannotExceedLimit:()=>o,twoSeriesBarCountCannotExceedLimit:()=>n,uniqueSeriesBarCountCannotExceedLimit:()=>r,whiteSpacePattern:()=>p});const i="При загрузке диаграммы произошла ошибка.",r="Всего ${ elementCount } столбцов в этой диаграмме. Линейчатые диаграммы с 1 серией ограничиваются ${ totalLimit } столбцами. Выберите поле категории с меньшим количеством уникальных значений или примените фильтр к вашим данным.",n="Линейчатые диаграммы с 2 сериями ограничиваются ${ totalLimit } столбцами или ${ seriesLimit } столбцами на одну серию. Выберите поле категории с меньшим количеством уникальных значений или примените фильтр к вашим данным.",o="Линейчатые диаграммы с тремя и более сериями ограничиваются ${ totalLimit } столбцами или ${ seriesLimit } столбцами на одну серию. Выберите поле категории с меньшим количеством уникальных значений или примените фильтр к вашим данным.",s="При создании диаграммы произошла ошибка.",l="Невозможно применить Логарифмическое преобразование к отрицательным или нулевым значениям.",d="Невозможно применить преобразование по методу квадратного корня к отрицательным значениям.",m="При загрузке слоя произошла ошибка. URL = ${ url }. ID элемента портала = ${ portalItemId }.",u="${ dataPath } должен быть уникальным. У серии с именем ${ seriesName } есть ID (${ seriesID }), который уже используется другой серией.",C="${ dataPath } не должен выполнять не количественное агрегирование для не числового поля.",$="В ${ dataPath } отсутствует свойство с именем ${ missingProperty }.",h="${ dataPath } не должен быть короче, чем ${ limit } символов.",c="В ${ dataPath } должно быть не менее ${ limit } элементов.",L="В ${ dataPath } не должно быть более ${ limit } элементов.",p="${ dataPath } должен содержать, как минимум, один символ, не являющейся пробелом.",g="${ dataPath } не должны иметь ${ additionalProperty }",P="${ dataPath } должен быть равен одному из этих допустимых значений: ${ allowedValues }.",x="${ dataPath } должен совпадать со схемой одного из следующих элементов: ${ schemaOptions }.",E="Точечная диаграмма с пропорциональными символами не поддерживается. Будет использован размер символа по умолчанию.",S="Ошибка чтения входных данных.",y="Для гистограмм необходимы как минимум два числовых значения.",I="Ожидаемый тип рядов в индексе ${ seriesIndex } - '${ expectedType }' но вместо этого было получено '${ receivedType }'",f="или",v="Убедитесь, что сумма выбранных числовых полей возвращает все положительные значения или все отрицательные значения.",V="Всего ${ sliceCount } долей на этой круговой диаграмме. Круговые диаграммы ограничены ${ totalLimit } долями. Выберите поле категории с меньшим количеством уникальных значений, добавьте меньше числовых полей или примените фильтр к вашим данным.",b="Датчики на основе объектов ограничены ${ totalLimit } объектами. Фильтруйте свои данные",D="На этой диаграмме в общей сложности ${ seriesCount } серий и ${ elementCount } точек данных. Линейные диаграммы ограничиваются ${ seriesLimit } сериями и ${ totalLimit } точками данных. Уменьшите число серий и/или заново агрегируйте либо отфильтруйте свои данные.",k="Линейные диаграммы ограничиваются ${ totalLimit } точками данных. Отфильтруйте или агрегируйте повторно ваши данные и попробуйте снова.",q={defaultError:i,uniqueSeriesBarCountCannotExceedLimit:r,twoSeriesBarCountCannotExceedLimit:n,threePlusSeriesBarCountCannotExceedLimit:o,defaultInvalidChart:"При создании диаграммы произошла ошибка.",negativeValueInDataForLogTransformation:"Невозможно применить Логарифмическое преобразование к отрицательным или нулевым значениям.",negativeValueInDataForSqrtTransformation:"Невозможно применить преобразование по методу квадратного корня к отрицательным значениям.",layerLoadFailure:m,duplicateSeriesID:u,nonNumericAggregation:C,requiredProperty:$,minLength:h,minItems:c,maxItems:L,whiteSpacePattern:p,additionalProperty:"${ dataPath } не должны иметь ${ additionalProperty }",enumValues:P,anyOfValues:x,bubbleChartValidateMsg:E,queryError:"Ошибка чтения входных данных.",histogramEmptyField:y,invalidSeriesType:I,or:"или",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:"Убедитесь, что сумма выбранных числовых полей возвращает все положительные значения или все отрицательные значения.",pieChartSlicesCannotExceedLimit:V,gaugeCannotExceedLimit:b,lineChartSeriesAndMarkersCannotExceedLimit:D,lineChartMarkersCannotExceedLimit:k}}}]);