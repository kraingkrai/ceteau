//Image Ratio Start
$.weactImageRatio = function () {};

(function ($) {
    imageRatio();

    $.weactImageRatio.triggerRender = function () {
        imageRatio();
    };

    $(window).resize(function () {
        setTimeout(function () {
            imageRatio();
        }, 150);
    });

    function imageRatio() {
        $('.weactImageRatio').each(function () {
            var currentElement = $(this);
            var container = currentElement.parent();
            var size = { 'width': container.width(), 'height': container.height() };

            var img = new Image();
            img.src = currentElement.attr('src');
            
            currentElement.css({'display': 'none'});
            img.onload = function() {
                setElementSize(currentElement, resizeImage(this, container), container);
                currentElement.css({ 'display': 'block' });
            };
        });
    }

    function resizeImage(image, container) {
        
        var scaleHeight = container.height() / image.height;
        var ratio = container.height() / image.height;

        if ((ratio * image.width) < container.width()) {
            ratio = container.width() / image.width;
        }

        var size = { width: image.width * ratio, height: image.height * ratio };

        return size;
    }

    function setElementSize(object, size, container) {
        object.css({
            'width': size.width + 'px',
            'height': size.height + 'px',
            'margin-left': ((container.width() - size.width) / 2) + 'px',
            'margin-top': ((container.height() - size.height) / 2) + 'px'
        });

        container.css({
            'overflow': 'hidden'
        });
    }
})($);
//Image Ratio End

//Container Scale Start
(function ($) {
    containerScale();

    $(window).resize(function () {
        setTimeout(function () {
            containerScale();
        }, 150);
    });

    function containerScale() {
        $('.weactContainerScale').each(function () {
            var currentElement = $(this);
            var width = currentElement.width();
            var wRatio = currentElement.attr('data-ratio').split(':')[0];
            var hRatio = currentElement.attr('data-ratio').split(':')[1];

            var height = (width * hRatio) / wRatio;

            currentElement.css({
                'height': height + 'px'
            });
        });
    }
})($);
//Container Scale End

//Form Checkbox Start
$.weactCheckbox = function () {};

(function ($) {
    $.weactCheckbox.triggerRender = function () {
        renderCheckbox();
    };

    $('body').delegate('.weact-checkbox', 'click', function () {
        if (!$(this).hasClass('disabled')) {
            var input = $(this).siblings('input[type=hidden]');
            var value = input.val();

            if (value.toLowerCase() === 'false') {
                value = true;
                $(this).addClass('checked');
                input.val('True');
            }
            else {
                value = false;
                $(this).removeClass('checked');
                input.val('False');
            }
        }
    });

    function renderCheckbox() {
        $('.weact-checkbox').each(function () {
            var input = $(this).siblings('input[type=hidden]');
            var value = input.val();

            if (value.toLowerCase() === 'true') {
                $(this).addClass('checked');
            }
        });
    }
})($);
//Form Checkbox End

//Form Time Picker Start
(function ($) {
    $.fn.timePicker = function () {
        this.find('input').prop('readonly', true);
        this.append(generatePopoverHTML());

        this.click(function () {
            $(this).find('.widgetTimePicker').removeClass('hidden');
        });

        this.delegate('.widgetSetTime', 'click', function (e) {
            e.stopPropagation();
            renderDisplayValue($(this).parent().parent());
        });

        this.delegate('.widgetTimePicker .adjustHour', 'click', function () {
            var current = $(this).closest('tr').siblings('.time-input').find('.timeHour span').text();

            if ($(this).attr('data-action') === 'increase') {
                setTimer($(this), increaseHour(parseInt(current)), 'h');
            }

            if ($(this).attr('data-action') === 'decrease') {
                setTimer($(this), decreaseHour(parseInt(current)), 'h');
            }
        });

        this.delegate('.widgetTimePicker .adjustMin', 'click', function () {
            var current = $(this).closest('tr').siblings('.time-input').find('.timeMin span').text();

            if ($(this).attr('data-action') === 'increase') {
                setTimer($(this), increaseMin(parseInt(current)), 'm');
            }

            if ($(this).attr('data-action') === 'decrease') {
                setTimer($(this), decreaseMin(parseInt(current)), 'm');
            }
        });
    }

    $(document).mouseup(function () {
        $('.widgetTimePicker').addClass('hidden');
    });

    function increaseHour(hour) {
        hour += 1;

        if (hour > 24) {
            hour = 0;
        }

        return hour;
    }

    function decreaseHour(hour) {
        hour -= 1;

        if (hour < 0) {
            hour = 24;
        }

        return hour;
    }

    function increaseMin(min) {
        min += 15;

        if (min > 59) {
            min = 0;
        }

        return min;
    }

    function decreaseMin(min) {
        min -= 15;

        if (min < 0) {
            min = 45;
        }

        return min;
    }

    function setTimer(element, timer, unit) {
        var classTimer = '';

        switch (unit) {
            case 'h':
                classTimer = '.timeHour span';
                break;

            case 'm':
                classTimer = '.timeMin span';
                break;
        }

        var timeInput = element.closest('tr').siblings('.time-input');
        timeInput.find(classTimer).text(Utils_LeadingZero(timer, 2));
    }

    function renderDisplayValue(element) {
        var displayValue = element.find('.timeHour span').text() + ':' + element.find('.timeMin span').text();
        element.find('input[type=text]').val(displayValue);
        element.find('.widgetTimePicker').addClass('hidden');
    }

    function generatePopoverHTML() {
        var html = '';

        html += '<div class="widget widgetTimePicker hidden">';
        html += '   <table>';
        html += '       <tr class="time-action">';
        html += '           <td><i class="glyphicon glyphicon-chevron-up adjustHour" data-action="increase"></i></td>';
        html += '           <td></td>';
        html += '           <td><i class="glyphicon glyphicon-chevron-up adjustMin" data-action="increase"></i></td>';
        html += '       </tr>';
        html += '       <tr class="time-input">';
        html += '           <td class="timeHour"><span>06</span></td>';
        html += '           <td>:</td>';
        html += '           <td class="timeMin"><span>00</span></td>';
        html += '       </tr>';
        html += '       <tr class="time-action">';
        html += '           <td><i class="glyphicon glyphicon-chevron-down adjustHour" data-action="decrease"></i></td>';
        html += '           <td></td>';
        html += '           <td><i class="glyphicon glyphicon-chevron-down adjustMin" data-action="decrease"></i></td>';
        html += '       </tr>';
        html += '   </table>';
        html += '   <button class="widget-set-time widgetSetTime">Set Time</button>';
        html += '</div>';

        return html;
    }
})($);
//Form Time Picker End

//Form Select with Auto Complete Start
(function ($) {
    $.fn.weactSelectBindData = function (object, keyName, valueName, parentName) {
        for (var i = 0; i < object.length; i++) {
            var key = '';
            var data = '';
            var parent = '';

            for (var property in object[i]) {
                if (object[i].hasOwnProperty(property)) {
                    if (property == keyName) {
                        key = object[i][property];
                    }

                    if (property == valueName) {
                        data = object[i][property];
                    }

                    if (property == parentName) {
                        parent = object[i][property];
                    }
                }
            }

            this.append('<li data-value="' + key + '" data-parent="' + parent + '">' + data + '</li>');
        }

        setSelectedValue(this);
    }

    var selectedAutoComplete = 0;

    //Select Option Event Start
    $('body').delegate('.form-select input, .form-select i', 'click', function () {
        var input = $(this);

        if (!$(this).is(':input')) {
            input = $(this).siblings('input[type=text]');
        }

        if (!input.is('[readonly]')) {
            $(this).siblings('input[type=text]').focus();
            showSearchFilter(this, '');

            $(this).select();
        }
    });

    $('body').delegate('.form-select ul li', 'mouseup', function () {
        $(this).parent().siblings('input[type=hidden]').val($(this).attr('data-value')).trigger('change');
        $(this).parent().siblings('input[type=text]').val($(this).text()).trigger('change');

        $('.form-select ul').hide();
    });

    $('html').delegate('body', 'mouseup', function () {
        $('.form-select ul').hide();
    });

    $('body').delegate('.form-select ul', 'mouseup', function () {
        event.stopPropagation();
    });

    $('body').delegate('.form-select input[type=text]', 'focusin', function () {
        var input = $(this);

        if (!$(this).is(':input')) {
            input = $(this).siblings('input[type=text]');
        }

        if (!input.is('[readonly]')) {
            selectedAutoComplete = 0;

            clearActive();
        }
    });

    $('body').delegate('.form-select input[type=text]', 'focusout', function () {
        var optionData = checkMatching($(this));

        if (optionData.text == '') {
            $(this).val('');
            $(this).siblings('input[type=hidden]').val('').trigger('change');
        }
        else {
            $(this).val(optionData.text);
            $(this).siblings('input[type=hidden]').val(optionData.value).trigger('change');
        }
    });

    $('body').delegate('.form-select input[type=text]', 'keyup', function (event) {
        if (event.keyCode != 38 && event.keyCode != 40) {
            filterSearch($(this), $(this).val());
        }
    });

    $('body').delegate('.form-select input[type=text]', 'keydown', function (event) {
        var autoCompleteList = $(this).siblings('ul').find('li:visible').length;

        if (event.keyCode == 38) {
            if (autoCompleteList > 0) {
                selectedAutoComplete--;

                if (selectedAutoComplete <= 0) {
                    selectedAutoComplete = autoCompleteList;
                }

                setActiveOption(selectedAutoComplete, $(this));
            }
        }
        else if (event.keyCode == 40) {
            if (autoCompleteList > 0) {
                selectedAutoComplete++;

                if (selectedAutoComplete > autoCompleteList) {
                    selectedAutoComplete = 1;
                }

                setActiveOption(selectedAutoComplete, $(this));
            }
        }
        else if (event.keyCode == 13) {
            setActiveOption(selectedAutoComplete, $(this));
            $('.form-select ul').hide();
            $(this).blur();
        }
    });
    //Select Option Event End

    //Function Start
    function setSelectedValue(selector) {
        var value = selector.siblings('input[type=hidden]').val();

        if (value != '') {
            selector.siblings('input[type=text]').val(selector.find('li[data-value="' + value + '"]').text());
        }
    }

    function setActiveOption(selectedAutoComplete, input) {
        input.siblings('ul').find('li:visible').each(function (index) {
            if (index === selectedAutoComplete - 1) {
                clearActive();
                $(this).addClass('active');
                input.val($(this).text());
            }
        });
    }

    function clearActive() {
        $('.form-select ul li').removeClass('active');
    }

    function checkMatching(input) {
        var typingValue = '';
        var optionText = '';

        input.siblings('ul').find('li').each(function () {
            var searchText = input.val();

            if (searchText.toLowerCase() == $(this).text().toLowerCase()) {
                typingValue = $(this).attr('data-value');
                optionText = $(this).text();
            }
        });

        return { text: optionText, value: typingValue };
    }

    function showSearchFilter(element, searchText) {
        $(element).siblings('ul').show();

        if ($(element).is("input")) {
            filterSearch($(element), searchText);
        }
    }

    function filterSearch(input, searchText) {
        input.siblings('ul').find('li').each(function () {
            if (searchText != '') {
                if ($(this).text().toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                    $(this).show();
                }
                else {
                    $(this).hide();
                }
            }
            else {
                $(this).show();
            }
        });
    }
    //Function End
})($);
//Form Select with Auto Complete End

//Form Upload Start
(function ($) {
    $.fn.weactRenderFiles = function (binary, name, id) {
        var element = this.find('.fileUpload input[type=file]');

        renderFileList(id, binary, name, element);
    }

    //Event Handler Start
    $('body').delegate('.fileUpload input[type=file]', 'click', function () {
        $(this).val('');
    });

    $('body').delegate('.fileUpload input[type=file]', 'change', function () {
        chooseFile(this);
    });

    $('body').delegate('.fileList li i', 'click', function () {
        var parentList = $(this).parents('ul');

        $(this).parent().remove();
        
        if (parentList.find('li').length == 0) {
            parentList.hide();
        }
    });
    //Event Handler End

    //Function Start
    function chooseFile(input) {
        if (input.files && input.files.length > 0) {
            $(input).parent().siblings('.errorList').empty();
            var allowFiles = $(input).parent().attr('allow');
            var allowSize = $(input).parent().attr('file-size');
            var totalList = $(input).parent().attr('total-upload');
            var multipleFileCount = $(input).parent().siblings('.fileList').find('li').length;

            $.each(input.files, function (key, value) {
                Utils_ShowAjaxLoading();

                if (!Utils_IsNullOrEmptyObject(allowFiles) && allowFiles.indexOf(value.name.substring(value.name.lastIndexOf('.'))) === -1) {
                    Utils_HideAjaxLoading();

                    $(input).parent().siblings('.errorList').append('<span><i class="glyphicon glyphicon-exclamation-sign"></i> File "<strong>' + value.name + '</strong>" cannot be used to upload, as it allows only ' + allowFiles + '</span>');
                }
                else if (!checkFileSize(allowSize, value.size)) {
                    Utils_HideAjaxLoading();

                    $(input).parent().siblings('.errorList').append('<span><i class="glyphicon glyphicon-exclamation-sign"></i> File "<strong>' + value.name + '</strong>" is larger than ' + allowSize + '</span>');
                }
                else {
                    if (Utils_IsNullOrEmptyObject(totalList) || multipleFileCount < parseInt(totalList) || parseInt(totalList) === 1) {
                        var fileReader = new FileReader();

                        fileReader.onload = function (e) {
                            renderFileList('', e.target.result, value.name, $(input), parseInt(totalList));
                            $(input).parent().siblings('.fileList').fadeIn('fast');

                            Utils_HideAjaxLoading();
                        };

                        fileReader.readAsDataURL(value);
                        multipleFileCount++;
                    }
                    else {
                        $(input).parent().siblings('.errorList').append('<span><i class="glyphicon glyphicon-exclamation-sign"></i> Maximum ' + totalList + ' file(s) are allowed for uploading</span>');

                        Utils_HideAjaxLoading();
                    }
                }
            });
        }
    }

    function checkFileSize(allowSize, fileSize) {
        var allowSize = allowSize.replace('MB', '');

        allowSize = (1024 * 1024) * parseInt(allowSize);

        if (fileSize > allowSize) {
            return false;
        }

        return true;
    }

    function renderFileList(id, binary, name, element, totalList) {
        var array = binary.split('base64,');
        var file = '';

        if (array.length > 1) {
            file = array[1];
        }

        var html = '';

        if (element.parent().siblings('.fileList').attr('display') == 'thumb') {
            html = generateFileThumbHTML(id, binary, name, file);
        }
        else {
            html = generateFileListHTML(id, binary, name, file);
        }

        if (totalList === 1) {
            element.parent().siblings('.fileList').empty();
            element.parent().siblings('.fileList').append(html);
        }
        else {
            element.parent().siblings('.fileList').append(html);
        }
    }

    function generateFileListHTML(id, binary, name, file) {
        var html = '<li>    \
                        <label><a href="' + binary + '" target="_blank" download>' + name + '</a></label>     \
                        <i>X</i>    \
                        <input type="hidden" class="fileID" value="' + id + '" />     \
                        <input type="hidden" class="fileBinary" value="' + file + '" />     \
                        <input type="hidden" class="fileName" value="' + name + '" />     \
                    </li>';

        return html;
    }

    function generateFileThumbHTML(id, binary, name, file) {
        var html = '<li class="thumb">    \
                        <img src="' + binary + '" />      \
                        <i>X</i>    \
                        <input type="hidden" class="fileID" value="' + id + '" />     \
                        <input type="hidden" class="fileBinary" value="' + file + '" />     \
                        <input type="hidden" class="fileName" value="' + name + '" />     \
                    </li>';

        return html;
    }
    //Function End
})($);
//Form Upload End

//Utilities Start
var Global_AjaxloadCounter = 0;

function Utils_ShowAjaxLoading() {
    if (Global_AjaxloadCounter == 0) {
        $('#ajaxLoading').show();
    }

    Global_AjaxloadCounter++;
}

function Utils_HideAjaxLoading() {
    Global_AjaxloadCounter--;

    if (Global_AjaxloadCounter == 0) {
        $('#ajaxLoading').hide();
    }
}

function Utils_IsNullOrEmptyObject(object) {
    if (object == '' || object == null || typeof object == 'undefined') {
        return true;
    }

    return false;
}

function Utils_GetQueryString(key) {
    String.prototype.getValueByKey = function (k) {
        var p = new RegExp('\\b' + k + '\\b', 'gi');
        return this.search(p) != -1 ? decodeURIComponent(this.substr(this.search(p) + k.length + 1).substr(0, this.substr(this.search(p) + k.length + 1).search(/(&|;|$)/))) : "";
    };

    return window.location.href.getValueByKey(key);
}

function Utils_CommaNumber(val) {
    while (/(\d+)(\d{3})/.test(val.toString())) {
        val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
    }

    return val;
}

function Utils_LeadingZero(num, size) {
    var s = '000000000' + num;
    return s.substr(s.length - size);
}
//Utilities End