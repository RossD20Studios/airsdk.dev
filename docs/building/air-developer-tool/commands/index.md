---
title: ADT commands
sidebar_label: Overview
sidebar_position: 1
---

The first argument passed to ADT specifies one of the following commands.

- [`-package`](package) — packages an AIR application or AIR Native Extension (ANE).

- [`-prepare`](prepare) — packages an AIR application as an intermediate file (AIRI), but does not sign it. AIRI files cannot be installed.

- [`-sign`](sign) — signs an AIRI package produced with the `-prepare` command. The `-prepare` and `-sign` commands allow packaging and signing to be performed at different times. You can also use the `-sign` command to sign or resign an ANE package.

- [`-migrate`](migrate) — applies a migration signature to a signed AIR package, which allows you to use a new or renewed code signing certificate.

- [`-certificate`](certificate) — creates a self-signed digital code signing certificate.

- [`-checkstore`](checkstore) — verifies that a digital certificate in a keystore can be accessed.

- [`-installApp`](installApp) — installs an AIR application on a device or device emulator.

- [`-launchApp`](launchApp) — launches an AIR application on a device or device emulator.

- [`-appVersion`](appVersion) — reports the version of an AIR application currently installed on a device or device emulator.

- [`-uninstallApp`](uninstallApp) — uninstalls an AIR application from a device or device emulator.

- [`-installRuntime`](installRuntime) — installs the AIR runtime on a device or device emulator.

- [`-runtimeVersion`](runtimeVersion) — reports the version of the AIR runtime currently installed on a device or device emulator.

- [`-uninstallRuntime`](uninstallRuntime) — uninstalls the AIR runtime currently installed from a device or device emulator.

- [`-version`](version) — reports the ADT version number.

- [`-devices`](devices) — reports device information for connected mobile devices or emulators.

- [`-help`](help) — displays the list of commands and options.


Many ADT commands share related sets of option flags and parameters. These sets of option are described in detail separately:

- ADT code signing options
- File and path options
- Debugger connection options
- Native extension options