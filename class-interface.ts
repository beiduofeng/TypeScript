//类和接口
//对类的描述  契约
//implements
//Radio接口
interface Radio {
    swithRadio(trigger: boolean): void;
}
//电池接口
interface Battery {
    checkBatteryStatus(): void;
}
//接口的继承
interface RadioWithBattery extends Radio {   //继承了Radio
    checkBatteryStatus(): void;    //继承了Battery
}
class Car {   //汽车类
    swithRadio(trigger: boolean) {

    }
}
class Cellphone {     //收音机类
    swithRadio(trigger: boolean) {

    }
}
