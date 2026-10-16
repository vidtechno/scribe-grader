-- Intermediate (B1) opens: its 90 lessons ship with the website. People who pick it take the placement test on the
-- levels below, and passing the Pre-Intermediate final test moves learners on to it.
update public.learning_levels set is_open = true where id = 'b1';
