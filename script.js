document.getElementById('saveImage').addEventListener('click', function() {
    const referenceNumber = document.getElementById('referenceNumber').value || "xxx-xxx944-0";
    const recipientName = document.getElementById('recipientName').value || "9,168,580.00";
    const accountNumber = document.getElementById('accountNumber').value || "-";
    const amount = document.getElementById('amount').value || "-";
    const transactionDate = document.getElementById('transactionDate').value || "-";
    const notes = document.getElementById('notes').value || "บัญชีของผู้กู้ไม่ตรงกับข้อมูลของผู้ยืมกู้ ธนาคารทำการโอนซ้ำหลายรอบ ไม่สามารถโอนเงินเข้าได้ ตามกฎระเบียบของธนาคาร กฎหมายความมั่นคงของกองทุนผู้กู้ ถูกอายัดชั่วคราว";
 
    // สร้างหน้าใหม่และเปิด
    const outputWindow = window.open('', '', 'width=1270,height=934');
    outputWindow.document.write(`
        <html>
        <head>
            <link rel="stylesheet" href="styles-output.css">
        </head>
        <body>
            <div id="capture">
                <img src="https://github.com/useronlineid/SCB/blob/main/A.jpg?raw=true" alt="Image">
                <p style="position: absolute; top: 494px; left: 460px; color:#656565; font-size: 19px;">${referenceNumber}</p>
                <p style="position: absolute; top: 519px; left: 460px; color:#656565; font-size: 19px;">${recipientName} บาท</p>
                <p style="position: absolute; top: 572px; left: 460px; color:#656565; font-size: 19px;">${accountNumber}</p>
                <p style="position: absolute; top: 643px; left: 460px; color:#656565; font-size: 19px;">${amount} บาท</p>
                <p style="position: absolute; top: 669px; left: 460px; color:#656565; font-size: 19px;">0.00 บาท</p>
                <p style="position: absolute; top: 694px; left: 460px; color:#656565; font-size: 19px;">${transactionDate}</p>
                <p style="position: absolute; top: 746px; left: 195px; color:#e10707; white-space: pre-line; font-size: 21px;width: 50%;">${notes}</p>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
            <script>
                window.onload = function() {
                    html2canvas(document.getElementById('capture')).then(canvas => {
                        document.body.appendChild(canvas);
                        const link = document.createElement('a');
                        link.download = 'output.png';
                        link.href = canvas.toDataURL();
                        link.click();
                    });
                };
            </script>
        </body>
        </html>
    `);
});
