#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>

namespace Ui {
class MainWindow;
}

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = 0);
    ~MainWindow();

private:
    Ui::MainWindow *ui;
private slots:
    void digit_pressed();

    void on_pushButton_point_released();
    void on_pushButton_clear_released();
    void on_pushButton_27_released();
    void on_pushButton_equals_released();
    void binary_operation_pressed();
    void unary_operation_pressed();
    void exponential_function();

};

#endif // MAINWINDOW_H
