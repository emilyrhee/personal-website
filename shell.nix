{ pkgs ? import <nixpkgs> { } }:

pkgs.mkShell {
  packages = builtins.attrValues {
    inherit (pkgs)
    pnpm
    nodejs;
  };
}