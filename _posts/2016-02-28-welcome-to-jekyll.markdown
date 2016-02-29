---
layout: main
title:  "Welcome to Jekyll!"
date:   2016-02-28 13:27:01
---
# Heading 1
...

## Heading 2
...

### Heading 3
...

### Heading 4
....

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

```ruby
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
```

```css
.highlight         { background-color: #1C1C1C }
.c                 { color: #5E5E5E }                            /* Comment                     */
```

```swift
/// Nice swift comment
let string = "hello world"
private func mapScalarValues<T>(s: String, f: UInt32 -> UInt32) -> String {
    let scalars = Array(s.unicodeScalars)
    let encrypted = scalars.map { x in
        Character(UnicodeScalar(f(x.value)))
    }
    return String(encrypted)
}
```

```js
// count to ten
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

// count to twenty
var j = 0;
while (j < 20) {
    j++;
    console.log(j);
}
```

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll’s dedicated Help repository][jekyll-help].

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
