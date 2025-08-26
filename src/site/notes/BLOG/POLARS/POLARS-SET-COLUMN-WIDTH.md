---
{"dg-publish":true,"permalink":"/blog/polars/polars-set-column-width/","updated":"2025-08-26T19:46:02.549+01:00"}
---

# How to widen a column of text in Polars
why you should read the docs

I recently ran into the problem of how to make a column wider in `polars`. I was familiar with `pandas` and with that, it's a simple configuration.

```python
pd.set_option('max_colwidth', 400)
```

when you search for similar functionality in `polars` you also find this simple configuration.

```python
pl.Config.set_tbl_rows(400)
```

The problem is, it doesn't work.

So you check stackoverflow and copy and paste code from there.

```python, editable
with pl.Config() as cfg:
    cfg.set_tbl_cols(400)
    print(df)
```
Doesn't work.

So you ask AI. They go on to give you a crappy, hacky workaround.

```txt
Polars doesn't have a built-in method to adjust column widths in its default console output. However, we can use a workaround by converting the Polars DataFrame to a pandas DataFrame and then use pandas' display options.
	- (Claude 3.5-sonnet, 2024)
```
Wrong!

So you read the docs. You check out the method. You're using it correctly.

You fork `polars` from github, follow the installation steps and step into the code. Everything looks fine.

So you go back to the documentation and read a bit more. There you find another method.

```python
pl.Config.set_fmt_str_lengths(400)
```

This solves your problem.

If you just read the documentation, you could save yourself a lot of time wasted on a wild goose chase and crappy AI suggestions. READ THE DOCUMENTATION!
