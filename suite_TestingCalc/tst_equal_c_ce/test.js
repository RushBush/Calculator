function main() {
    startApplication("Calculator");
    clickButton(waitForObject(":MainWindow.pushButton_1_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_2_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_5_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_clear_QPushButton"));
    test.compare(waitForObjectExists(":MainWindow.lineEdit_QLineEdit").text, "0");
    clickButton(waitForObject(":MainWindow.pushButton_2_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_6_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_5_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_27_QPushButton"));
    test.compare(waitForObjectExists(":MainWindow.lineEdit_QLineEdit").text, "26");
    clickButton(waitForObject(":MainWindow.pushButton_clear_QPushButton"));
}
