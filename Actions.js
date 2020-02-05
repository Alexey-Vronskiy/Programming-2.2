
var word = "Lemons";
addItem(word,leftInStack(word));
var word = "Milk";
addItem(word,leftInStack(word));

    $("#add-button").click(function () {
        var input = $(".line-for-text").val();
        if (input.length) {
            var inStackEl = leftInStack(input);
            addItem(input, inStackEl);

        }
    })



    function addItem(title, inStackEl) {
        var LIST = $('.left-side');
        var ITEM_TEMPLATE = $('.item').html();
        var node = $(ITEM_TEMPLATE); //Create	new	HTML	node
        node.find(".name").text(title); //Set	product	title



        node.find(".bought").click(function () {
            inStackEl.css("display", "none");
            wasBought = addToBoughtItems(inStackEl);
            updateNode(node, 1);
        });

        node.find(".not-bought").click(function () {
            wasBought.remove();
            inStackEl.css("display", "flex").css("transition", "2s");
            updateNode(node, 2);
        });
        //Delete	Action
        node.find("#delete").click(function () {
            node.slideUp("slow", function () {
                node.remove();
                inStackEl.remove();
            });
        });

        node.find(".minus").click(function () {

            var text = node.find('.number').text();
            var textR = inStackEl.find(".quantity-of-added").text();

            var intNum = parseInt(text);
            var intRightN = parseInt(textR);

            if (intNum >= 2) {
                intNum = intNum - 1;
                intRightN = intRightN - 1;
                node.find(".number").text(intNum);
                inStackEl.find(".quantity-of-added").text(intRightN);
            }
        });
        node.find(".plus").click(function () {

            var text = node.find('.number').text();
            var textR = inStackEl.find(".quantity-of-added").text();

            var intNum = parseInt(text);
            var intRightN = parseInt(textR);

            intNum = intNum + 1;
            intRightN = intRightN + 1;
            node.find(".number").text(intNum);
            inStackEl.find(".quantity-of-added").text(intRightN);
        });
        node.hide();
        LIST.append(node);
        node.slideDown("slow");
        //Add	to	the	end	of	the	list
    }
    

    function addToBoughtItems(inStackEl) {
        var BOUGHT_LIST = $('.area-for-bought');
        var BOUGHT_TEMPLATE = $('.bought-item').html();
        var node = $(BOUGHT_TEMPLATE);
        node.find(".name-of-bought").text(inStackEl.find(".name-of-added").text());
        node.find(".name-of-bought").css("text-decoration", "line-through");
        node.find(".quantity-of-added").text(inStackEl.find(".quantity-of-added").text());
        node.hide();
        BOUGHT_LIST.append(node);
        node.show();
        //   node.slideDown("slow");
        return node;
    }


    function leftInStack(title) {
        var RIGHT_LIST = $('.area-for-left');
        var ADDED_TEMPLATE = $('.added-item').html();
        var node = $(ADDED_TEMPLATE); //Create	new	HTML	node
        node.find(".name-of-added").text(title);


        node.hide();
        RIGHT_LIST.append(node);
        node.show();
        // node.slideDown("slow");
        return node;
    }


    function updateNode(node, i) {
        node.fadeOut(400, function () {
            fn(node, i);
            node.fadeIn(400);
        });
    }

    
    function fn(node, i) {
        if (i == 1) {
            node.find(".bought").css("display", "none");
            node.find("#delete").css("display", "none");
            node.find(".not-bought").css("display", "unset");
            node.find(".name").css("text-decoration", "line-through");
            node.find(".plus").fadeOut(100);
            node.find(".minus").fadeOut(100);
        } else {
            node.find(".bought").css("display", "unset");
            node.find("#delete").css("display", "unset");
            node.find(".not-bought").css("display", "none");
            node.find(".name").css("text-decoration", "none");
            node.find(".plus").fadeIn(250);
            node.find(".minus").fadeIn(250);
        }
    }


