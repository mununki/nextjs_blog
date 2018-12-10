# [Linux] How to connect to wireless WPA2 with Netplan

by moondaddi on 2018-12-10

---

## Netplan?

Netplan is the utility for easily configuring networking on a linux system. Ubuntu 17.10 starts including the netplan by default instead of deprecated ifupdown.

## How to connect

### Configure \*.yaml

Make new file with any name \*.yaml in `/etc/netplan`
You can make as many configuration files as you want. In that case, \*.yaml files will be applied by alphbetically.

```shell
network:
  version: 2
    renderer: networkd
    ethernets:  # this is for lan
      enp2s0:
        addresses: []
        dhcp4: true
    wifis:  # this is for wlan
      wlp3s0:  # wlan interface
        access-points: "SSID":  # your SSID
          password: "PASWORD"  # your PASSWORD
        dhcp4: no
        dhcp6: true
        addresses: [192.168.0.200/24]  # set the static IP
        gateway4: 192.168.0.1  # gateway
        nameservers:
          addresses: [192.168.0.1,8.8.8.8,8.8.4.4]
```

> How to check wlan interface

```shell
$ iwconfig
```

### Generate conf

The configuration files `/etc/netplan/*.yaml` needs to be generated before applying to system. The _.conf files will be generated in `/run/netplan/_.conf` which shadow completely YAML files.

```shell
$ sudo netplan --debug generate
```

### Apply the generated conf

```shell
$ sudo netplan apply
```

### References

Netplan reference page ([https://netplan.io/reference](https://netplan.io/reference))
