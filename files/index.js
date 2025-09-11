document.addEventListener("DOMContentLoaded", function () {
       function showMessage(msgtext, time = 2500) {
              var messageDiv = document.getElementById('message');
              messageDiv.textContent = msgtext;
              $(messageDiv).show();
              // 自动隐藏消息
              setTimeout(function () {
                     $(messageDiv).hide();
              }, time);
       }
       var trxyesData = { result: false };
       var bishu = document.getElementById("selectCount");
       var shichang = document.getElementById("timeAndPrice");
       var price = document.getElementById("price");
       var nowBishu = bishu.value;
       var nowShiChang = shichang.value;
       bishu.addEventListener("change", function () {
              nowBishu = bishu.value;
              if ((nowBishu == 1 || nowBishu == 2 || nowBishu == 3 || nowBishu == 4) && nowShiChang == 8) {
                     shichang.selectedIndex = 0;
                     nowShiChang = 3
                     showMessage('1-4笔仅可选1小时有效')
              }
              price.textContent = nowBishu * nowShiChang;
       });
       shichang.addEventListener("change", function () {
              nowShiChang = shichang.value;
              if ((nowBishu == 1 || nowBishu == 2 || nowBishu == 3 || nowBishu == 4) && nowShiChang == 8) {
                     shichang.selectedIndex = 0;
                     nowShiChang = 3
                     showMessage('1-4笔仅可选1小时有效')
              }
              price.textContent = nowBishu * nowShiChang;
       })
       function copyText(text, msgtext) {
              const el = document.createElement('textarea');
              el.value = text;
              document.body.appendChild(el);
              el.select();
              document.execCommand('copy');
              document.body.removeChild(el)
              showMessage(msgtext)
       }
       //监听点击事件
       document.getElementById("energyAddress").addEventListener("click", function () {
              var text = document.getElementById("energyAddress").textContent;
              copyText(text, "租赁地址复制成功")
       })
       document.getElementById("kefuIcon").addEventListener("click", function () {
              $('#telegramID').slideDown();
       })
       document.getElementById("customerService").addEventListener("click", function () {
              $('#telegramID').slideDown();
       })
       document.getElementById("closeTelegram").addEventListener("click", function () {
              $('#telegramID').slideUp();
       })
       document.getElementById("copyTelegram").addEventListener("click", function () {
              $('#telegramID').slideUp();
              var text = document.getElementById("telegramText").textContent;
              copyText(text, "客服ID复制成功")
       })
       window.addEventListener('scroll', function () {
              var divElement = document.getElementById('backTop');
              var scrollPosition = window.scrollY || window.pageYOffset;
              if (scrollPosition >= 250) {
                     $('#backTop').fadeIn();
              } else {
                     $('#backTop').fadeOut();
              }
       });
       document.getElementById("backTop").addEventListener('click', function () {
              window.scrollTo({
                     top: 0
              });
       })
       document.getElementById("rqCodeicon2").addEventListener("click", function () {
              var imgElement = document.getElementById('qrcodeImg');
              var newImageUrl = './Image/energyQrcod.png';
              imgElement.src = newImageUrl;
              var spanElement = document.getElementById('qrcodeTitle');
              var newText = '能量租赁地址二维码';
              spanElement.textContent = newText;
              $('#addressQrcode').slideDown();
       })
       document.getElementById("rqCodeicon3").addEventListener("click", function () {
              var imgElement = document.getElementById('qrcodeImg');
              var newImageUrl = './Image/exchangeQrcode.png';
              imgElement.src = newImageUrl;
              var spanElement = document.getElementById('qrcodeTitle');
              var newText = 'U-T互换地址二维码';
              spanElement.textContent = newText;
              $('#addressQrcode').slideDown();
       })
       document.getElementById("rqCodeicon4").addEventListener("click", function () {
              var imgElement = document.getElementById('qrcodeImg');
              var newImageUrl = './Image/energyQrcod.png';
              imgElement.src = newImageUrl;
              var spanElement = document.getElementById('qrcodeTitle');
              var newText = '预存扣费模式地址二维码';
              spanElement.textContent = newText;
              $('#addressQrcode').slideDown();
       })
       document.getElementById("closeQrcode").addEventListener("click", function () {
              $('#addressQrcode').slideUp();
       })
       document.getElementById("saveLocal").addEventListener("click", function () {
              var imageUrl = document.getElementById('qrcodeImg').src;
              var imageFilename = 'qrcode_image.png';
              var link = document.createElement('a');
              link.href = imageUrl;
              link.download = imageFilename;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
       })
       document.getElementById("exchangeAddress").addEventListener("click", function () {
              var text = document.getElementById("exchangeAddress").textContent;
              copyText(text, "兑换地址复制成功")
       })
       document.getElementById("copyPrestoreAddress").addEventListener("click", function () {
              var text = document.getElementById("copyPrestoreAddress").textContent;
              copyText(text, "预存地址复制成功")
       })
       document.getElementById("selectUsdt").addEventListener("click", function () {
              copyText('手续费原因,暂时只支持TRX租赁', "手续费原因,暂时只支持TRX租赁")
       })
       var usdtToTrx = 0;
       var trxToUsdt = 0;
       document.getElementById("exchangeInput1").addEventListener("input", function (event) {
              var nowValue = event.target.value;
              var firstText = document.getElementById("iconName1").textContent;
              if (parseFloat(nowValue) >= 1 && firstText == 'USDT') {
                     document.getElementById('getCount').textContent = Number((usdtToTrx * nowValue).toFixed(3));
              } else if (parseFloat(nowValue) >= 1 && firstText == 'TRX') {
                     document.getElementById('getCount').textContent = Number((trxToUsdt * nowValue).toFixed(3));
              } else {
                     document.getElementById('getCount').textContent = '0';
              }
       })
       document.getElementsByClassName("iconFont1")[0].addEventListener("click", function () {
              var nowValue = document.getElementById('exchangeInput1').value;
              var firstText = document.getElementById("iconName1").textContent;
              if (firstText == 'USDT') {
                     document.getElementById("iconName1").textContent = 'TRX';
                     document.getElementById("iconName2").textContent = 'USDT';
                     if (parseFloat(nowValue) >= 1) {
                            document.getElementById('getCount').textContent = '暂不支持';
                     }
              } else {
                     document.getElementById("iconName2").textContent = 'TRX';
                     document.getElementById("iconName1").textContent = 'USDT';
                     if (parseFloat(nowValue) >= 1) {
                            document.getElementById('getCount').textContent = Number((usdtToTrx * nowValue).toFixed(3));
                     }
              }
       })

       document.querySelector(".closeBalance").addEventListener("click", function () {
              $('#addressBalance').hide();
       })

       var useTrx = document.querySelector(".useTrx");
       var useUsdt = document.querySelector(".useUsdt");
       var nowSelect = 'useTrx';
       useTrx.addEventListener("click", function () {
              nowSelect = 'useTrx';
              useUsdt.classList.remove("selectUseUsdt")
              useTrx.classList.add("useTrx")
              useTrx.textContent = "√预存TRX"
              useUsdt.textContent = "预存USDT"
              $("#calculatorInput").show();
              $(".selectText").text('*请输入您要预存的Trx数量');
              $("#calculatorText").text('0');
              $("#calculatorInput").val('0');
       })

       useUsdt.addEventListener("click", function () {
              nowSelect = 'useUsdt';
              useTrx.classList.remove("useTrx")
              useUsdt.classList.add("selectUseUsdt")
              useTrx.textContent = "预存TRX"
              useUsdt.textContent = "√预存USDT"
              $("#calculatorText").text('0');
              $("#calculatorInput").val('0');
              $(".selectText").text('*使用USDT预存加送15%，更优惠');
       })

       document.getElementById("calculatorInput").addEventListener("input", function (event) {
              var nowValue = event.target.value;
              if (nowSelect == 'useTrx' && parseInt(nowValue) >= trxyesData.bishu_min_trx) {
                     $("#calculatorText").text(`${parseInt(parseInt(nowValue) / trxyesData.bishu_jiage)}`)
                     var bishu = parseInt(parseInt(nowValue) / trxyesData.bishu_jiage)
                     if (bishu >= 30) {
                            $(".selectText").text(`预存${nowValue}TRX,可获得${bishu}次免手续费转帐`);
                     } else {
                            $(".selectText").text(`预存${nowValue}TRX,可获得${bishu}次免手续费转帐`);
                     }
              } else if (nowSelect == 'useTrx' && parseInt(nowValue) < trxyesData.bishu_min_trx) {
                     $("#calculatorText").text('0')
                     $(".selectText").text(`*最低预存量为${trxyesData.bishu_min_trx}TRX或以上`);
              } else if (nowSelect == 'useUsdt' && parseInt(nowValue) >= trxyesData.bishu_min_usdt) {
                     //usdtToTrx
                     var getTotalCount = parseFloat(nowValue) * (usdtToTrx / 0.9);
                     var getTrxCount = parseFloat(nowValue) * usdtToTrx;
                     var zenSongTrx = getTotalCount - getTrxCount;
                     var bishu = parseInt(parseInt(getTotalCount) / trxyesData.bishu_jiage)
                     $("#calculatorText").text(`${parseInt(parseInt(getTotalCount) / trxyesData.bishu_jiage)}`)
                     if (bishu >= 30) {
                            $(".selectText").text(`预存${nowValue}USDT，按实时汇率获得${Number(getTrxCount.toFixed(3))}Trx，再送${zenSongTrx.toFixed(3)}Trx，可获得${bishu}次免手续费转帐`);
                     } else {
                            $(".selectText").text(`预存${nowValue}USDT，按实时汇率获得${Number(getTrxCount.toFixed(3))}Trx，再送${zenSongTrx.toFixed(3)}Trx，可获得${bishu}次免手续费转帐`);
                     }
              } else if (nowSelect == 'useUsdt' && parseInt(nowValue) < trxyesData.bishu_min_usdt) {
                     $("#calculatorText").text('0');
                     $(".selectText").text(`*最低${trxyesData.bishu_min_usdt}USDT起,充越多送越多`);
              }
       })


       document.getElementById("apiQueryBtn").addEventListener("click", async function () {
              showMessage('即将推出')
       })
});


