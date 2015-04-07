package winutils;

/**
 *
 */
public class ProcessInfo {
	String handle;
    String name;

    public String getHandle() {
        return handle;
    }

    public void setHandle(String handle) {
        this.handle = handle;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "ProcessInfo{" +
                "handle='" + handle + '\'' +
                ", name='" + name + '\'' +
                '}';
    }
}
