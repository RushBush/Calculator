function main() {
    var file = File.open("test.txt", "w");
    file.write("Perfomance test:\n")
    startApplication("Calculator");
    clickButton(waitForObject(":MainWindow.pushButton_6_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_power_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_1_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_6_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_equals_QPushButton"));
    test.compare(waitForObjectExists(":MainWindow.lineEdit_QLineEdit").text, "2821109907456");
    clickButton(waitForObject(":MainWindow.pushButton_clear_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_1_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_2_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_3_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_4_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_5_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_6_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_7_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_8_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_9_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_multiply_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_9_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_8_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_7_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_6_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_5_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_4_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_3_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_2_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_1_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_equals_QPushButton"));
    test.compare(waitForObjectExists(":MainWindow.lineEdit_QLineEdit").text, "1.21932631112635e+17");
    clickButton(waitForObject(":MainWindow.pushButton_clear_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_1_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_4_QPushButton"));
    clickButton(waitForObject(":MainWindow.pushButton_fact_QPushButton"));
    test.compare(waitForObjectExists(":MainWindow.lineEdit_QLineEdit").text, "1278945280");
    file.write("\tPass:" + String(test.resultCount("passes"))
        + "\n\tFail:" + String(test.resultCount("fails")));
    file.close();
}

