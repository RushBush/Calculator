function main() {
    startApplication("Calculator");
    clickButton(waitForObject(":MainWindow.pushButton_ln_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_1_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_0_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_equals_QPushButton"));
    test.compare(waitForObjectExists(":MainWindow.lineEdit_QLineEdit").text, "2.30259");
    clickButton(waitForObject(":MainWindow.pushButton_clear_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_lg_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_1_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_5_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_equals_QPushButton"));
    test.compare(waitForObjectExists(":MainWindow.lineEdit_QLineEdit").text, "1.17609");
    clickButton(waitForObject(":MainWindow.pushButton_clear_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_tg_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_4_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_5_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_equals_QPushButton"));
    test.compare(waitForObjectExists(":MainWindow.lineEdit_QLineEdit").text, "1.61978");
    clickButton(waitForObject(":MainWindow.pushButton_clear_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_ctg_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_2_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_3_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_equals_QPushButton"));
    test.compare(waitForObjectExists(":MainWindow.lineEdit_QLineEdit").text, "1.52735");
    clickButton(waitForObject(":MainWindow.pushButton_clear_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_1_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_5_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_clear_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_sin_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_1_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_2_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_point_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_5_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_4_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_equals_QPushButton"));
    test.compare(waitForObjectExists(":MainWindow.lineEdit_QLineEdit").text, "-0.0263676");
    clickButton(waitForObject(":MainWindow.pushButton_clear_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_cos_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_1_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_2_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_point_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_5_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_equals_QPushButton"));
    test.compare(waitForObjectExists(":MainWindow.lineEdit_QLineEdit").text, "0.997798");
    clickButton(waitForObject(":MainWindow.pushButton_clear_QPushButton"));
}
