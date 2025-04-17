package edu.neusoft.demo1;

public class Env {
    private String camparea;

    public String getCamparea() {
        return camparea;
    }

    public void setCamparea(String camparea) {
        this.camparea = camparea;
    }

    public String getRoomid() {
        return roomid;
    }

    public void setRoomid(String roomid) {
        this.roomid = roomid;
    }

    public String getTemperature() {
        return temperature;
    }

    public void setTemperature(String temperature) {
        this.temperature = temperature;
    }

    public String getAirquality() {
        return airquality;
    }

    public void setAirquality(String airquality) {
        this.airquality = airquality;
    }

    private String roomid;
    private String temperature;
    private String airquality;
}
