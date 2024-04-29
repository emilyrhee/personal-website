{ pkgs ? import <nixpkgs> { } }:

pkgs.mkShell {
  packages = builtins.attrValues {
    inherit (pkgs) nodejs;
  };

  HOST = "64.176.199.73";
  PORT = 80;
  ORIGIN = "http://emilyrhee.me/"

  shellHook = ''
    git pull
    npm run build
    node build
  '';
}