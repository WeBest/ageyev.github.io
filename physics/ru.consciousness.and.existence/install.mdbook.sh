
# see:
# https://rust-lang.github.io/mdBook/

# cd ~/Apps
git clone --depth=1 https://github.com/rust-lang/mdBook.git
cd mdBook
cargo build --release

# The executable mdbook will be in the ./target/release folder, this should be added to the path.
