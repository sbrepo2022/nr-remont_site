var roomTypeValsOneMeter = {
    roomType1: 2400, // жилая комната
    roomType2: 2790, // кухня
    roomType3: 11750,  // ванная
    roomType4: 14500,  // туалет
    roomType5: 11750,  // совмещенный санузел
    roomType6: 2790, // квартира
    roomType7: 4680, // новостройка
}

var roomTypeVals = {
    roomType1: 28800,   // жилая комната
    roomType2: 16740,   // кухня
    roomType3: 23500,    // ванная
    roomType4: 29000,  // туалет
    roomType5: 23500,  // совмещенный санузел
    roomType6: 69750,   // квартира
    roomType7: 117000,  // новостройка
}

var materialsVals = {
    roomType1: [0.3, 0.3, 0.3, 1],      // жилая комната
    roomType2: [0.3, 0.3, 0.3, 1],      // кухня
    roomType3: [0.3, 0.3, 0.3, 1],       // ванная
    roomType4: [0.3, 0.3, 0.3, 1],       // туалет
    roomType5: [0.3, 0.3, 0.3, 1],       // совмещенный санузел
    roomType6: [0.3, 0.3, 0.3, 1],      // квартира
    roomType7: [0.3, 0.3, 0.3, 0.3],      // новостройка
}

var roomTypeDays = {
    roomType1: 4,   // жилая комната
    roomType2: 4,   // кухня
    roomType3: 3,     // ванная
    roomType4: 3,     // туалет
    roomType5: 3,     // совмещенный санузел
    roomType6: 15,    // квартира
    roomType7: 30,    // новостройка
}

var standardMeter = {
    roomType1: 12,   // жилая комната
    roomType2: 6,    // кухня
    roomType3: 2,     // ванная
    roomType4: 2,     // туалет
    roomType5: 2,     // совмещенный санузел
    roomType6: 25,   // квартира
    roomType7: 25,   // новостройка
}

var standardMeterDiffStep = {
    roomTypeFlat: [0.2, 0.2, 0.2, 0.2, 0.2],  // квартира
    roomTypeRoom: [0.5, 0.5, 0.5, 0.5, 0.5]   // комната
}

var standardMeterDiffDays = {
    roomTypeFlat: [1, 1, 2, 2, 2],    // квартира
    roomTypeRoom: [1, 1, 2, 2, 2]     // комната
}

var remontTypeDays = {
    roomType1: [4, 8, 18, 1],      // жилая комната
    roomType2: [4, 7, 16, 1],      // кухня
    roomType3: [3, 14, 15, 1],     // ванная
    roomType4: [3, 14, 15, 1],     // туалет
    roomType5: [3, 14, 15, 1],     // совмещенный санузел
    roomType6: [15, 30, 30, 1],    // квартира
    roomType7: [30, 16, 25, 32],    // новостройка
}

var remday = {
    room6ko:[15,15,30,45,60,75],
    room6ka:[30,30,60,90,120,150],
    room6e:[30,30,60,90,120,150],
    room7ch:[15,15,30,45,60,75],
    room7b:[30,30,60,90,120,150],
    room7s:[30,30,60,90,120,150],
}

var oneMetrVals = {
    roomType1: [5000, 6500, 8500, 1],      // жилая комната
    roomType2: [5000, 6500, 8500, 1],      // кухня
    roomType3: [5000, 6500, 8500, 1],    // ванная
    roomType4: [5000, 6500, 8500, 1],    // туалет
    roomType5: [5000, 6500, 8500, 1],    // совмещенный санузел
    roomType6: [5125, 6375, 8223, 1],      // квартира
    roomType7: [3227, 6525, 7025, 1]     // новостройка
}



function calculateStep(step) {
	if (step == 1) {

        //Вариант жилья
        var roomType = $('#type-room option:selected').val();

        var roomTypeVal = roomTypeVals['roomType'+roomType];
        var roomTypeDay = roomTypeDays['roomType'+roomType];
        var remontType = $('#type-remont-room option:selected').data('type-remont-room');

        var standardMeterVal = standardMeter['roomType'+roomType];

        //var remontTypeVal = remontTypeVals['roomType'+roomType][remontType-1];
        var materialsVal = materialsVals['roomType'+roomType][remontType-1];
        var remontTypeDay = remontTypeDays['roomType'+roomType][remontType-1];

        $('.tooltips-box').removeClass('active');
        $('#type-remont-room-' + remontType).addClass('active');

        var oneMetr = oneMetrVals['roomType' + roomType][remontType-1];

        var valueMetrs = $('#enter-value-room').val();

        if (valueMetrs >= 200) {
        	$('.calculator-column--cost, .calculator-column--materials, .calculator-column--date').addClass('disabled');
        	$('.calculator-value-error').addClass('active');
        } else {
        	$('.calculator-column--cost, .calculator-column--materials, .calculator-column--date').removeClass('disabled');
        	$('.calculator-value-error').removeClass('active');
        }

        if (roomType == 1) {
        	valueMetrs = ((typeof valueMetrs === 'undefined' || valueMetrs < 1) ? 12 : valueMetrs);

        	$('#enter-value-room').prop('placeholder', '12');


        } else if (roomType == 2) {
        	valueMetrs = ((typeof valueMetrs === 'undefined' || valueMetrs < 1) ? 6 : valueMetrs);

        	$('#enter-value-room').prop('placeholder', '6');

        } else {
        	valueMetrs = ((typeof valueMetrs === 'undefined' || valueMetrs < 1) ? 2 : valueMetrs);

        	$('#enter-value-room').prop('placeholder', '2');
        }

        var k = oneMetr * standardMeterVal;
        var m = oneMetr * valueMetrs;

        var detailsSum;
        if (valueMetrs.length == 0) {
        	detailsSum = k;
        } else {
        	detailsSum = Math.ceil(m);
        }

        if (roomType == 5) {
          //detailsSum = detailsSum * 1.2;
          remontTypeDay = Math.ceil(remontTypeDay * 1.2);
      } else if (roomType == 4) {
      	roomTypeDay = Math.ceil(roomTypeDay/2);
      }

      remontTypeDay += addOverStandardDays(roomType, remontType, valueMetrs);

      $('.value').html(valueMetrs);
      $('.select-result').html(Math.ceil(detailsSum) + '&nbsp; руб.');
      $('.select-result-part').html(Math.ceil(detailsSum) + '&nbsp; руб/мес.');
      $('.select-materials').html(Math.ceil(detailsSum * materialsVal) + '&nbsp; руб.');
      $('.select-days').html(remontTypeDay + '&nbsp; дн.');

        // Room
        var roomTypeResult = $('#type-room option:selected').text();
        var valueMetrs = $('#enter-value-room').val();
        var roomRemontResult = $('#type-remont-room option:selected').text();

        var valRoomType = roomTypeResult;
        var valRoomMeter = valueMetrs;
        var valRoomRemont = roomRemontResult;

        var valSum = detailsSum;
        var valDays = remontTypeDay;

        $('input[name="resultValRoomType"]').val(valRoomType);
        $('input[name="resultValRoomMeter"]').val(valRoomMeter);
        $('input[name="resultValRoomRemont"]').val(valRoomRemont);

        $('input[name="resultValSum"]').val(detailsSum);
        $('input[name="resultValDays"]').val(remontTypeDay);
        $('input[name="resultValSumMaterial"]').val(Math.ceil(detailsSum * materialsVal));

    } else if (step == 2) {
        //Вариант жилья
        var roomType = 6;

        var roomTypeVal = roomTypeVals['roomType'+roomType];
        var roomTypeDay = roomTypeDays['roomType'+roomType];
        var roomTypeDayn = roomTypeDays['roomType'+roomType];
        var remontType = $('#type-remont-apartment option:selected').data('type-remont-apartment');
        switch(remontType){
            case 1:roomTypeDayn='room6'+'ko';break;
            case 2:roomTypeDayn='room6'+'ka';break;
            case 3:roomTypeDayn='room6'+'e';break;
        }
        //var remontTypeVal = remontTypeVals['roomType'+roomType][remontType-1];
        var materialsVal = materialsVals['roomType'+roomType][remontType-1];
        var remontTypeDay = remontTypeDays['roomType'+roomType][remontType-1];

        var standardMeterVal = standardMeter['roomType'+roomType];

        $('.tooltips-box-apartment').removeClass('active');
        $('#type-remont-apartment-' + remontType).addClass('active');

        var oneMetr = oneMetrVals['roomType' + roomType][remontType-1];

        var valueMetrsFlat = $('#enter-value').val();

        //valueMetrs = ((typeof valueMetrs === 'undefined' || valueMetrs < 1) ? 25 : valueMetrs);

        if (valueMetrsFlat >= 200) {
        	$('.calculator-column--cost, .calculator-column--materials, .calculator-column--date').addClass('disabled');
        	$('.calculator-value-error').addClass('active');
        } else {
        	$('.calculator-column--cost, .calculator-column--materials, .calculator-column--date').removeClass('disabled');
        	$('.calculator-value-error').removeClass('active');
        }

        var rooms = $('input[name="room"]:checked','#rooms').val();

        var k = oneMetr * rooms;
        var m = oneMetr * valueMetrsFlat;

        var detailsSumFlat;
        if (valueMetrsFlat.length == 0) {
        	$('#enter-value').prop('placeholder', rooms);
        	detailsSumFlat = k;
        } else {
        	detailsSumFlat = Math.ceil(m);
        }
        /*console.log($('input[name="room"]:checked','#rooms').index());*/
        var roomsid = $('input[name="room"]:checked','#rooms').index()/2;
        /*console.log(roomsid);
        remontTypeDayFlat = Math.round(remontTypeDay * $('input[name="room"]:checked', '#rooms').data('number-room'));

        remontTypeDayFlat += addOverStandardDays(roomType, remontType, valueMetrs);*/
        remontTypeDayFlat = remday[roomTypeDayn][roomsid];

        $('.value').html(valueMetrsFlat);
        $('.select-result').html(Math.ceil(detailsSumFlat) + '&nbsp; руб.');
        $('.select-materials').html(Math.ceil(detailsSumFlat * materialsVal) + '&nbsp; руб.');
        $('.select-days').html(remontTypeDayFlat + '&nbsp; дн.');

        // Flat
        var flatTypeResult = $('input[name="room"]:checked + label').html();
        var valueMetrsFlat = $('#enter-value').val();
        var flatRemontResult = $('#type-remont-apartment option:selected').text();

        var valFlatType = flatTypeResult;
        var valFlatMeter = valueMetrsFlat;
        var valFlatRemont = flatRemontResult;

        var valSumFlat = detailsSumFlat;
        var valDaysFlat = remontTypeDayFlat;

        $('input[name="resultValFlatType"]').val(flatTypeResult);
        $('input[name="resultValFlatMeterPlaceholder"]').val(rooms);
        $('input[name="resultValFlatMeter"]').val(valueMetrsFlat);
        $('input[name="resultValFlatRemont"]').val(flatRemontResult);

        $('input[name="resultValSumFlat"]').val(detailsSumFlat);
        $('input[name="resultValSumFlatMaterial"]').val(Math.ceil(detailsSumFlat * materialsVal));

        $('input[name="resultValDaysFlat"]').val(remontTypeDayFlat);

    } else if (step == 3) {
        //Вариант жилья
        var roomType = 7;

        var roomTypeVal = roomTypeVals['roomType'+roomType];
        var roomTypeDay = roomTypeDays['roomType'+roomType];
        var remontType = $('#type-finish option:selected').val();
        //var remontTypeVal = remontTypeVals['roomType'+roomType][remontType-1];
        var materialsVal = materialsVals['roomType'+roomType][remontType-1];
        var remontTypeDay = remontTypeDays['roomType'+roomType][remontType-1];

        switch(remontType){
            case '1':roomTypeDayn='room7ch';break;
            case '2':roomTypeDayn='room7b';break;
            case '3':roomTypeDayn='room7s';break;
        }
        var standardMeterVal = standardMeter['roomType'+roomType];

        var oneMetr = oneMetrVals['roomType' + roomType][remontType-1];

        var valueMetrsNew = $('#enter-value-new-room').val();

        //valueMetrs = ((typeof valueMetrs === 'undefined' || valueMetrs < 1) ? 30 : valueMetrs);

        if (valueMetrsNew >= 200) {
        	$('.calculator-column--cost, .calculator-column--materials, .calculator-column--date').addClass('disabled');
        	$('.calculator-value-error').addClass('active');
        } else {
        	$('.calculator-column--cost, .calculator-column--materials, .calculator-column--date').removeClass('disabled');
        	$('.calculator-value-error').removeClass('active');
        }

        var roomsNew = $('input[name="roomNew"]:checked','#rooms-new').val();

        //var studia = $('input[id="room-new-1"]','#rooms-new').val();

        if (remontType == 4) {
        	$('input[name="roomNew"]','#rooms-new').prop('checked', false);
        	$('input[id="room-new-1"]','#rooms-new').prop('checked', true);

        	$('input[name="roomNew"]+label','#rooms-new').not(':first').addClass('unbind-hover');
        } else {
        	$('input[name="roomNew"]+label','#rooms-new').removeClass('unbind-hover');
        }

        var k;
        var m;

        k = oneMetr * roomsNew;
        m = oneMetr * valueMetrsNew;

        var detailsSumNew;
        if (valueMetrsNew.length == 0) {
        	$('#enter-value-new-room').prop('placeholder', roomsNew);
        	detailsSumNew = k;
        } else {
        	detailsSumNew = Math.ceil(m);
        }

        if (remontType == 4) {
        	$('#enter-value-new-room').prop('placeholder', '25');
        }

        /*remontTypeDayNew = Math.round(remontTypeDay * $('input[name="roomNew"]:checked', '#rooms-new').data('number-room'));

        remontTypeDayNew += addOverStandardDays(roomType, remontType, valueMetrs);*/
        var roomsid = $('input[name="roomNew"]:checked','#rooms-new').index()/2;
        //console.log(roomTypeDayn);
        remontTypeDayNew = remday[roomTypeDayn][roomsid];

        $('.value').html(valueMetrsNew);
        $('.select-result').html(Math.ceil(detailsSumNew) + '&nbsp; руб.');
        $('.select-materials').html(Math.ceil(detailsSumNew * materialsVal) + '&nbsp; руб.');
        $('.select-days').html(remontTypeDayNew + '&nbsp; дн.');

        // New Flat
        var newTypeResult = $('input[name="roomNew"]:checked + label').html();
        var valueMetrsNew = $('#enter-value-new-room').val();
        var newRemontResult = $('#type-finish option:selected').text();

        var valNewType = newTypeResult;
        var valNewMeter = valueMetrsNew;
        var valNewRemont = newRemontResult;

        var valSumNew = detailsSumNew;
        var valDaysNew = remontTypeDayNew;

        $('input[name="resultValNewType"]').val(newTypeResult);
        $('input[name="resultValNewMeterPlaceholder"]').val(roomsNew);
        $('input[name="resultValNewMeter"]').val(valueMetrsNew);

        $('input[name="resultValNewRemont"]').val(newRemontResult);

        $('input[name="resultValSumNew"]').val(detailsSumNew);
        $('input[name="resultValSumNewMaterial"]').val(Math.ceil(detailsSumNew * materialsVal));
        $('input[name="resultValDaysNew"]').val(remontTypeDayNew);

    }
}

$(function() {

    calculateStep(2);


    // Step 1

    $('#room select, #room input').on('change', function(){
    	calculateStep(1);
    });

    // Step 2

    $('#flat select, #flat input').on('change', function(){
    	calculateStep(2);
    });

    // Step 3

    $('#new-apartment input, #new-apartment select').on('change', function(){
    	calculateStep(3);
    });

    // Step 4

    $('#bath input, #bath select').on('change', function(){
    	calculateStep(4);
    });

    // Toggle steps

    $('#calculator__tab li').on('click', function(e){
    	e.preventDefault();
    	var step = $(this).data('step');

    	$('#calculator__tab li').removeClass('active');
    	$('div[id^="step"]').removeClass('active');

    	$('#calculator__tab li[data-step="' + step + '"]').addClass('active');
    	$('#step-' + step).addClass('active');

    	calculateStep(step);

    });

    // Toggle steps mobile

    $('#calculator-tab-mob').on('change', function(e){
    	//alert();
    	e.preventDefault();
    	var step = $('#calculator-tab-mob option:selected').data('step');

    	$('#calculator__tab li').removeClass('active');
    	$('div[id^="step"]').removeClass('active');

    	$('#calculator__tab li[data-step="' + step + '"]').addClass('active');
    	$('#step-' + step).addClass('active');

    	calculateStep(step);

    });

    // Calculator summit

    $('#calculator-submit-1').on('click', function(){

    	var getEngineer = $('#phone-calculator-1');
    	var getEngineerVal = $('#phone-calculator-1').val();

    	if (getEngineerVal.length == 0) {
    		getEngineer.addClass('error');
    		return false;
    	} else {
    		getEngineer.removeClass('error');
    	}
    });

    $('#calculator-submit-2').on('click', function(){

    	var getEngineerFlat = $('#phone-calculator-2');
    	var getEngineerFlatVal = $('#phone-calculator-2').val();

    	if (getEngineerFlatVal.length == 0) {
    		getEngineerFlat.addClass('error');
    		return false;
    	} else {
    		getEngineerFlat.removeClass('error');
    	}
    });

    $('#calculator-submit-3').on('click', function(){

    	var getEngineerApartment = $('#phone-calculator-3');
    	var getEngineerApartmentVal = $('#phone-calculator-3').val();

    	if (getEngineerApartmentVal.length == 0) {
    		getEngineerApartment.addClass('error');
    		return false;
    	} else {
    		getEngineerApartment.removeClass('error');
    	}
    });

    // Validation inputs

    $(document).on('input', '[id=enter-value-room], [id=enter-value], [id=enter-value-new-room]', function(e){
    	var val = $(this).val();
    	val = val
    	.replace(/\,/g,'.')
    	.replace(/(\.)+?(.*)(\.)/,'$1$2')
    	.replace(/([^,.\d])|([,.](?=[,.]))|(^\D)/g,'')
    	.replace(/([,.]\d{2})(\d)/,'$1');
    	$(this).val(val);
    });

    $('.selectric-form-control').hover(function(){
        $(this).toggleClass('selectric-hover');
    });

    $('.selectric-form-control').click(function(){
        $(this).toggleClass('selectric-open');
        $(this).toggleClass('selectric-focus');
        $(this).addClass('selectric-below');
        $(this).find('.selectric-items').css('width','100%');
    });

    $('.selectric-items li').click(function(){
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
        $(this).closest('.selectric-items').siblings('.selectric').find('.label').text($(this).text());
        ssstep = $(this).parents('.tab-pane').attr('id');
        ssstep = ssstep.slice(-1);
        selvval = Number($(this).attr('data-index'))+1;
        $(this).closest('.selectric-items').siblings('.selectric-hide-select').find('select').val(selvval).change();
        console.log('111'+$('#type-remont-room').val());
    });
});
