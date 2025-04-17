package edu.neusoft.demo1;

public class Borrowing {
    private String month;

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public int getReturnedcnt() {
        return returnedcnt;
    }

    public void setReturnedcnt(int returnedcnt) {
        this.returnedcnt = returnedcnt;
    }

    public int getBorrowcnt() {
        return borrowcnt;
    }

    public void setBorrowcnt(int borrowcnt) {
        this.borrowcnt = borrowcnt;
    }

    private int returnedcnt;
    private int borrowcnt;
}
