          currentNum = "0";
        }

        //Reset variables for continuous use.
        equalsBtn = false;
        hasDecimal = false;
        clearBtn = false;
      }
      break;

      /* -------------------------------------- DARK GRAY BTN ------------------------------------------- */
    case 'darkGray':
      /* --- CLEAR BTN ---*/
      if (obj.is('.clear')) {
        if (!clearBtn && obj.text() === 'C' && !equalsBtn)
          clearBtn = true;

        hasDecimal = false;
        equalsBtn = false;
        currentNum = "0";
        obj.text('AC');

        if (clearBtn) //clear current number
        {
          clearBtn = false;
          showNum(evaluator("0"));
          drawOrangeBorders($lastOperator);
        } else //restart calculator
        {
          chainAdd = false;
          displayNum = "0";
          showNum(evaluator(displayNum + 0));
          clearOrangeBorders($orangeButtons);
          $lastOperator = "";
          lastNum = []
        }
      }

      /* --- +/- BTN ---*/
      if (obj.attr("value") === "+/-") {
        // add/remove the - sign and show the number
        if (equalsBtn) //if equals was previously tapped, edit and show displayNum
        {
          displayNum = displayNum * -1;

          if (hasDecimal)
            showNum(eval(displayNum).toPrecision(8));
          else
            showNum(eval(displayNum.toPrecision(9)));

          displayNum = displayNum.toString();
        } 
        else //if the keypad was tapped, edit and show currentNum
        {
          currentNum = currentNum * -1;

          if (hasDecimal)
            showNum(currentNum);
          else
            showNum(eval(currentNum));

          currentNum = currentNum.toString();
        }
