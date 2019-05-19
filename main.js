var car = {
    car: 'BMW Z4',
    maximumSpeed: 120,
    currentSpeed: 0,
    isOn: false,
    fuelLevel:0,
    speedHistory: [0],
    usageHistory: [],
    getModel: function() {
        console.log('Your car is a ' + this.car)
    },
    speedUp: function(a){
        if(this.fuelLevel !== 0 && this.currentSpeed + a < 120){
            this.currentSpeed += a
            console.log('You rised spped with ' + a)
            this.speedHistory.push([this.currentSpeed])
            this.usageHistory.push(['Speed up: ' + a])
        }
        else{
            if(this.fuelLevel == 0){
                console.log('there is no fuel')
                this.usageHistory.push(['Speed up: unsuccessful'])
            }
            else{
                console.log('ERROR: not allowed speed, max allowed speed is 120')
            }
        }
    },
    start: function(){
        if(this.fuelLevel !== 0){
            this.isOn = true
            console.log('Engine is runing')
            this.usageHistory.push(['turned on: success'])
        }
        else{
            console.log('not enough fuel to run engine')
            this.usageHistory.push(['turned on: unsuccessful'])
        }
    },
    addFuel: function(a){
        this.fuelLevel = a
        this.usageHistory.push(['added '+a+'L fuel'])
    },
    turnOff: function(){
        if(this.currentSpeed === 0){
            this.isOn = false
            this.speedHistory.push([0])
            this.usageHistory.push(['turned off: success'])
        }
    },
    break: function(a){
        if(a === 0){
            this.currentSpeed = 0
            this.usageHistory.push(['speed down to 0'])
        }
        else{
            if(this.currentSpeed>a){
                this.currentSpeed -= a
                this.speedHistory.push([this.currentSpeed])
                this.usageHistory.push(['speed down with '+ a])
            }
        }
    }
}
car.getModel()
console.log(car.maximumSpeed)
console.log(car.currentSpeed)
console.log(car.isOn)
console.log(car.fuelLevel)
car.speedUp(60)
car.start()
car.addFuel(20)
car.start()
car.speedUp(40)
console.log(car.currentSpeed)
car.speedUp(60)
console.log(car.currentSpeed)
car.speedUp(200)
car.turnOff()
console.log(car.isOn)
car.break(20)
car.break(0)
car.turnOff()
console.log(car.speedHistory)
console.log(car.usageHistory)